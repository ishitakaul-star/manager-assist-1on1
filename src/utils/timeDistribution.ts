import type { TimeDistribution } from '../types';
import { getSnowSummary } from '../data/servicenow';
import { getGitHubActivity } from '../data/github';
import { getCalendarSummary } from '../data/calendar';
import { getPagerDutyData } from '../data/pagerduty';

export function computeTimeDistribution(employeeId: string): TimeDistribution {
  const snow = getSnowSummary(employeeId);
  const gh = getGitHubActivity(employeeId);
  const cal = getCalendarSummary(employeeId);
  const pd = getPagerDutyData(employeeId);

  // Rough heuristic based on signals
  const incidentWeight = (snow.open * 3 + snow.resolved * 1) + (pd.incidentsLast30Days * 0.5);
  const reviewWeight = gh.prsReviewed * 1.5;
  const projectWeight = gh.prsMerged * 2 + gh.prsOpened * 1;
  const meetingWeight = cal.totalMinutes / 60;

  const total = incidentWeight + reviewWeight + projectWeight + meetingWeight + 2; // +2 for "other" baseline

  const incidents = Math.round((incidentWeight / total) * 100);
  const codeReview = Math.round((reviewWeight / total) * 100);
  const projectWork = Math.round((projectWeight / total) * 100);
  const meetings = Math.round((meetingWeight / total) * 100);
  const other = 100 - incidents - codeReview - projectWork - meetings;

  return { incidents, projectWork, codeReview, meetings, other: Math.max(other, 0) };
}
