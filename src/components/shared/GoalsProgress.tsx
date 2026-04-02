import { useState } from 'react';
import type { EmployeeGoalsData, BetterWorksGoal } from '../../types';
import { getEmployeeGoals } from '../../data/betterworks';

interface GoalsProgressProps {
  employeeId: string;
  viewMode: 'manager' | 'employee';
  employeeName: string;
}

function ProgressBar({ progress, size = 'md' }: { progress: number; size?: 'sm' | 'md' }) {
  const color = progress >= 75 ? 'bg-success' : progress >= 50 ? 'bg-warning' : 'bg-danger';
  const height = size === 'sm' ? 'h-1.5' : 'h-2';
  return (
    <div className={`w-full bg-gray-100 rounded-full ${height}`}>
      <div className={`${color} ${height} rounded-full transition-all`} style={{ width: `${Math.min(progress, 100)}%` }} />
    </div>
  );
}

function StatusBadge({ status }: { status: BetterWorksGoal['status'] }) {
  const styles = {
    'On Track': 'bg-success-light text-success',
    'At Risk': 'bg-warning-light text-warning',
    'Behind': 'bg-danger-light text-danger',
    'Completed': 'bg-blue-50 text-primary',
  };
  return <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${styles[status]}`}>{status}</span>;
}

function GoalCard({ goal, viewMode }: { goal: BetterWorksGoal; viewMode: 'manager' | 'employee' }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg p-3 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <StatusBadge status={goal.status} />
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              goal.type === 'personal_development' ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-500'
            }`}>
              {goal.type === 'personal_development' ? 'PD' : 'Business'}
            </span>
          </div>
          <h4 className="text-sm font-medium text-text-primary">{goal.title}</h4>
        </div>
        <span className="text-sm font-semibold text-text-primary shrink-0">{goal.progress}%</span>
      </div>

      <ProgressBar progress={goal.progress} />

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-text-muted">Updated {goal.lastUpdated}</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline"
        >
          {expanded ? 'Hide details' : `${goal.keyResults.length} key results`}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 space-y-2 border-t border-border pt-2">
          {goal.keyResults.map(kr => (
            <div key={kr.id} className="text-xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-text-secondary">{kr.title}</span>
                <span className="text-text-primary font-medium shrink-0 ml-2">{kr.progress}%</span>
              </div>
              <ProgressBar progress={kr.progress} size="sm" />
              <p className="text-text-muted mt-0.5">{kr.current}</p>
            </div>
          ))}
          {viewMode === 'manager' && goal.managerNotes && (
            <div className="bg-blue-50 rounded p-2 text-xs text-blue-700 mt-2">
              <span className="font-medium">Your note:</span> {goal.managerNotes}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CheckInCard({ data, viewMode }: { data: EmployeeGoalsData; viewMode: 'manager' | 'employee' }) {
  const checkIn = data.recentCheckIn;
  if (!checkIn) return null;

  const sentimentColors = {
    positive: { bg: 'bg-success-light', text: 'text-success', icon: '+' },
    neutral: { bg: 'bg-gray-100', text: 'text-gray-600', icon: '~' },
    concerned: { bg: 'bg-warning-light', text: 'text-warning', icon: '!' },
  };
  const s = sentimentColors[checkIn.sentiment];
  const label = viewMode === 'manager' ? 'Last Check-in' : 'My Last Check-in';

  return (
    <div className="bg-gray-50 rounded-lg p-3 text-xs">
      <div className="flex items-center gap-2 mb-1.5">
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${s.bg} ${s.text}`}>{s.icon}</span>
        <span className="font-medium text-text-primary">{label}</span>
        <span className="text-text-muted">{checkIn.date}</span>
      </div>
      <p className="text-text-secondary">{checkIn.summary}</p>
    </div>
  );
}

export function GoalsProgress({ employeeId, viewMode, employeeName }: GoalsProgressProps) {
  const data = getEmployeeGoals(employeeId);
  if (data.goals.length === 0) return null;

  const businessGoals = data.goals.filter(g => g.type === 'business');
  const pdGoals = data.goals.filter(g => g.type === 'personal_development');

  const title = viewMode === 'manager'
    ? `${employeeName}'s Goals (BetterWorks)`
    : 'My Goals (BetterWorks)';

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#4f46e5" strokeWidth="1.2"/>
            <circle cx="7" cy="7" r="3" stroke="#4f46e5" strokeWidth="1.2"/>
            <circle cx="7" cy="7" r="0.75" fill="#4f46e5"/>
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>

      {/* Summary stats */}
      <div className="flex items-center gap-4 mb-3 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-bold text-text-primary">{data.overallProgress}%</span>
          <span className="text-xs text-text-muted">overall</span>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="text-success font-medium">{data.goalsOnTrack} on track</span>
          {data.goalsAtRisk > 0 && <span className="text-warning font-medium">{data.goalsAtRisk} at risk</span>}
          {data.goalsBehind > 0 && <span className="text-danger font-medium">{data.goalsBehind} behind</span>}
        </div>
      </div>

      <ProgressBar progress={data.overallProgress} />

      {/* Check-in */}
      <div className="mt-3">
        <CheckInCard data={data} viewMode={viewMode} />
      </div>

      {/* Business goals */}
      {businessGoals.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wide">Business Goals</p>
          <div className="space-y-2">
            {businessGoals.map(g => <GoalCard key={g.id} goal={g} viewMode={viewMode} />)}
          </div>
        </div>
      )}

      {/* PD goals */}
      {pdGoals.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wide">Personal Development</p>
          <div className="space-y-2">
            {pdGoals.map(g => <GoalCard key={g.id} goal={g} viewMode={viewMode} />)}
          </div>
        </div>
      )}
    </div>
  );
}
