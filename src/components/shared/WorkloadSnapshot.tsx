import { getJiraSummary } from '../../data/jira';
import { getGitHubActivity } from '../../data/github';
import { getSnowSummary } from '../../data/servicenow';
import { getPagerDutyData } from '../../data/pagerduty';
import { getCalendarSummary } from '../../data/calendar';

interface WorkloadSnapshotProps {
  employeeId: string;
}

function StatCard({ title, icon, children, color }: { title: string; icon: React.ReactNode; children: React.ReactNode; color: string }) {
  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
      </div>
      <div className="space-y-1.5 text-sm">
        {children}
      </div>
    </div>
  );
}

function StatLine({ label, value, highlight }: { label: string; value: string | number; highlight?: 'success' | 'warning' | 'danger' }) {
  const colorClass = highlight === 'success' ? 'text-success font-medium'
    : highlight === 'warning' ? 'text-warning font-medium'
    : highlight === 'danger' ? 'text-danger font-medium'
    : 'text-text-primary';

  return (
    <div className="flex justify-between items-center">
      <span className="text-text-secondary">{label}</span>
      <span className={colorClass}>{value}</span>
    </div>
  );
}

export function WorkloadSnapshot({ employeeId }: WorkloadSnapshotProps) {
  const jira = getJiraSummary(employeeId);
  const gh = getGitHubActivity(employeeId);
  const snow = getSnowSummary(employeeId);
  const pd = getPagerDutyData(employeeId);
  const cal = getCalendarSummary(employeeId);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-text-primary">Workload Snapshot</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <StatCard
          title={`Jira (${jira.project})`}
          color="bg-blue-50"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="#2563eb"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>}
        >
          <StatLine label="Total tickets" value={jira.total} />
          <StatLine label="Completed" value={jira.done} highlight="success" />
          <StatLine label="In Progress" value={jira.inProgress} />
          <StatLine label="In Review" value={jira.inReview} />
          <StatLine label="Blocked" value={jira.blocked} highlight={jira.blocked > 0 ? 'danger' : undefined} />
          <StatLine label="To Do" value={jira.toDo} />
          <div className="border-t border-border mt-1.5 pt-1.5">
            <StatLine label="Story Points (done/total)" value={`${jira.completedStoryPoints}/${jira.totalStoryPoints}`} />
          </div>
        </StatCard>

        <StatCard
          title="GitHub"
          color="bg-gray-100"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="#374151"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>}
        >
          <StatLine label="PRs Opened" value={gh.prsOpened} />
          <StatLine label="PRs Merged" value={gh.prsMerged} highlight="success" />
          <StatLine label="PRs Reviewed" value={gh.prsReviewed} />
          <StatLine label="Commits (14d)" value={gh.commitsLast14Days} />
          {gh.recentPRs.some(pr => pr.afterHours) && (
            <div className="border-t border-border mt-1.5 pt-1.5">
              <StatLine label="After-hours activity" value={`${gh.recentPRs.filter(pr => pr.afterHours).length} PRs`} highlight="warning" />
            </div>
          )}
        </StatCard>

        <StatCard
          title="ServiceNow"
          color="bg-orange-50"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="#ea580c"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 2.5a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z"/></svg>}
        >
          <StatLine label="Total incidents" value={snow.total} />
          <StatLine label="Resolved" value={snow.resolved} highlight="success" />
          <StatLine label="Open" value={snow.open} highlight={snow.open > 0 ? 'warning' : undefined} />
          <StatLine label="Major incidents" value={snow.majorIncidents} highlight={snow.majorIncidents > 0 ? 'danger' : undefined} />
          {(snow.p1Count > 0 || snow.p2Count > 0) && (
            <div className="border-t border-border mt-1.5 pt-1.5">
              <StatLine label="P1" value={snow.p1Count} highlight={snow.p1Count > 0 ? 'danger' : undefined} />
              <StatLine label="P2" value={snow.p2Count} highlight={snow.p2Count > 0 ? 'warning' : undefined} />
            </div>
          )}
        </StatCard>

        <StatCard
          title="PagerDuty"
          color="bg-red-50"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="#dc2626"><path d="M8 2l6 10H2L8 2z"/></svg>}
        >
          <StatLine label="On-call" value={pd.isOnCall ? 'Yes' : 'No'} highlight={pd.isOnCall ? 'warning' : undefined} />
          {pd.onCallSchedule && <p className="text-xs text-text-muted">{pd.onCallSchedule}</p>}
          <StatLine label="Incidents (30d)" value={pd.incidentsLast30Days} />
          <StatLine label="After-hours pages" value={pd.afterHoursPages} highlight={pd.afterHoursPages > 2 ? 'danger' : pd.afterHoursPages > 0 ? 'warning' : undefined} />
          <StatLine label="Weekend pages" value={pd.weekendPages} highlight={pd.weekendPages > 0 ? 'warning' : undefined} />
        </StatCard>

        <StatCard
          title={`Calendar (${cal.totalHours}h total)`}
          color="bg-purple-50"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="#7c3aed"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#7c3aed" strokeWidth="1.5" fill="none"/><path d="M2 6h12M5 1v3M11 1v3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/></svg>}
        >
          <StatLine label="Total meetings" value={cal.totalMeetings} />
          <StatLine label="Ceremonial" value={`${cal.ceremonial}m`} />
          <StatLine label="Tech Collaboration" value={`${cal.techCollab}m`} />
          <StatLine label="Operational" value={`${cal.operational}m`} />
          <StatLine label="Cross-functional" value={`${cal.crossFunctional}m`} />
          {cal.knowledgeShare > 0 && <StatLine label="Knowledge Share" value={`${cal.knowledgeShare}m`} />}
          <StatLine label="Manager/Org" value={`${cal.managerOrg}m`} />
        </StatCard>
      </div>
    </div>
  );
}
