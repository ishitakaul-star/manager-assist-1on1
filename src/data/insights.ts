import type { EmployeeInsights, InvisibleWorkPrompt } from '../types';

const insights: Record<string, EmployeeInsights> = {
  'emp-001': {
    employeeId: 'emp-001',
    recentWins: [
      { text: 'Completed payment gateway v3 migration (PLAT-1234), a 3-week effort involving 1,240 lines of new code across 12 files', source: 'Jira', date: '2026-03-28' },
      { text: 'Shipped retry logic for idempotent transactions, reducing failed checkout rate by ~15%', source: 'GitHub', date: '2026-03-30' },
      { text: 'Resolved P1 payment processing timeout during peak hours within 2 hours (INC0045678)', source: 'SNOW', date: '2026-03-26' },
    ],
    risks: [
      { text: 'Currently on-call (Primary, Payment Platform) with 2 after-hours pages in the last week', severity: 'medium', source: 'PagerDuty' },
      { text: 'Critical bug PLAT-1256 (race condition in checkout) is in progress with after-hours commits detected', severity: 'high', source: 'Jira + GitHub' },
      { text: 'Heavy code review load: 7 PRs reviewed in the last 2 weeks on top of active development', severity: 'low', source: 'GitHub' },
    ],
    openLoops: [
      { text: 'PLAT-1260 (observability dashboards) has been in review for 2 days with no reviewer assigned', source: 'Jira', daysSinceLastUpdate: 1 },
      { text: 'Legacy webhook handler deprecation (PLAT-1270) has not been started', source: 'Jira', daysSinceLastUpdate: 5 },
    ],
    managerTalkingPoints: [
      'Recognize the payment gateway migration completion and its impact on platform reliability',
      'Check in on the critical checkout race condition: does Sarah need additional support?',
      'Discuss on-call load and after-hours work patterns. Are there signs of fatigue?',
      'Talk about the code review load: is 7 reviews sustainable alongside development?',
    ],
    employeeTalkingPoints: [
      'Highlight the payment gateway migration as a significant delivery this sprint',
      'Raise the checkout race condition complexity and whether pair programming would help',
      'Discuss on-call burden and whether the rotation needs adjustment',
      'Ask for feedback on code review thoroughness and collaboration style',
    ],
  },
  'emp-002': {
    employeeId: 'emp-002',
    recentWins: [
      { text: 'Fixed the null pointer bug in profile update handler (PLAT-1248), unblocking several downstream teams', source: 'Jira', date: '2026-03-27' },
      { text: 'Making progress on user preferences API, a first solo feature delivery', source: 'GitHub', date: '2026-04-01' },
    ],
    risks: [
      { text: 'PLAT-1253 (auth middleware tests) has been blocked for 8 days, waiting on API team dependency', severity: 'high', source: 'Jira' },
      { text: 'PR for user preferences API has changes requested, may need guidance on architectural feedback', severity: 'medium', source: 'GitHub' },
      { text: 'Lower commit velocity (12 commits / 2 weeks) compared to team average. Could indicate blockers or ramp-up period.', severity: 'low', source: 'GitHub' },
    ],
    openLoops: [
      { text: 'Blocked ticket PLAT-1253 needs escalation or workaround for API team dependency', source: 'Jira', daysSinceLastUpdate: 8 },
    ],
    managerTalkingPoints: [
      'Recognize the profile update fix and its downstream impact',
      'Discuss the blocked auth middleware ticket: can we help escalate the API dependency?',
      'Check in on the preferences API feature: this is Marcus\'s first solo feature, how is it going?',
      'Explore onboarding experience 6 months in. What support would be most helpful?',
    ],
    employeeTalkingPoints: [
      'Share progress on the user preferences API and any technical challenges',
      'Raise the blocked auth middleware ticket and ask for help with the API team',
      'Ask about upcoming project assignments and growth opportunities',
      'Discuss what areas of the codebase to explore next for growth',
    ],
  },
  'emp-003': {
    employeeId: 'emp-003',
    recentWins: [
      { text: 'Delivered the event-driven notification system (PLAT-1220), a 13-point epic with 2,100 lines of new architecture', source: 'Jira', date: '2026-03-29' },
      { text: 'Completed horizontal scaling refactor for message queue consumer (PLAT-1235)', source: 'GitHub', date: '2026-03-31' },
      { text: 'Led resolution of P1 notification service outage (INC0045650), coordinating across 3 teams', source: 'SNOW', date: '2026-03-25' },
      { text: 'Presented tech talk on Event Sourcing Patterns to the broader engineering org', source: 'Calendar', date: '2026-04-01' },
    ],
    risks: [
      { text: 'Two open incidents (SMS delivery failures + DLQ backlog) may be consuming significant focus', severity: 'high', source: 'SNOW' },
      { text: '6 PagerDuty incidents in last 30 days, 3 after-hours and 2 weekend pages. Potential burnout risk.', severity: 'high', source: 'PagerDuty' },
      { text: 'Very heavy meeting load: 11 meetings this week across operations, cross-functional, and knowledge share', severity: 'medium', source: 'Calendar' },
      { text: 'ITAD for multi-region failover is in progress but competes with active incident work', severity: 'medium', source: 'Jira' },
    ],
    openLoops: [
      { text: 'SMS delivery failures (INC0045701) still in progress, open for 2 days', source: 'SNOW', daysSinceLastUpdate: 2 },
      { text: 'DLQ backlog investigation (INC0045720 + PLAT-1250) ongoing', source: 'SNOW + Jira', daysSinceLastUpdate: 1 },
      { text: 'Multi-region failover ITAD (PLAT-1258) due April 7, still in draft', source: 'Jira', daysSinceLastUpdate: 0 },
    ],
    managerTalkingPoints: [
      'Recognize the massive notification system delivery and its architectural significance',
      'Urgent: discuss the sustained incident load (2 open incidents + high PagerDuty volume). Is Priya at risk of burnout?',
      'Talk about meeting load: 11 meetings this week. Can any be delegated or reduced?',
      'Discuss ITAD timeline vs incident load: does the deadline need to shift?',
      'Acknowledge the tech talk contribution and explore further leadership opportunities',
    ],
    employeeTalkingPoints: [
      'Highlight the notification system delivery as a major architectural win',
      'Raise concerns about sustained incident load and its impact on project work',
      'Discuss the ITAD deadline: is it realistic given current incident burden?',
      'Talk about interest in more architecture ownership and staff-level leadership scope',
      'Ask about capacity planning for on-call rotation adjustments',
    ],
  },
  'emp-004': {
    employeeId: 'emp-004',
    recentWins: [
      { text: 'Shipped CSV export for transaction reports (PLAT-1242), fulfilling a top customer request', source: 'Jira', date: '2026-03-28' },
      { text: 'Fixed timezone conversion bug in report scheduler (PLAT-1249) that was causing incorrect report timing', source: 'GitHub', date: '2026-03-30' },
      { text: 'Resolved empty CSV file incident (INC0045695) same day it was reported', source: 'SNOW', date: '2026-03-28' },
    ],
    risks: [
      { text: 'Two "To Do" items (E2E tests + DB driver upgrade) have not been started, upcoming deadlines', severity: 'medium', source: 'Jira' },
      { text: 'Pagination PR (PLAT-1255) still pending review. Could become a blocker for report query performance.', severity: 'low', source: 'GitHub' },
    ],
    openLoops: [
      { text: 'E2E test creation (PLAT-1263) due April 8, not yet started', source: 'Jira', daysSinceLastUpdate: 4 },
      { text: 'DB driver upgrade (PLAT-1271) has no deadline set, may need prioritization discussion', source: 'Jira', daysSinceLastUpdate: 3 },
    ],
    managerTalkingPoints: [
      'Recognize the CSV export delivery and its impact on customer satisfaction',
      'Discuss the timezone bug fix and David\'s growing expertise in the reporting domain',
      'Check in on upcoming work: E2E tests and DB driver upgrade both need to start soon',
      'Explore interest in taking on more complex reporting features or expanding scope',
    ],
    employeeTalkingPoints: [
      'Highlight the CSV export feature as a direct customer impact win',
      'Ask about prioritization: E2E tests vs DB driver upgrade, which first?',
      'Discuss interest in the DB migration planning and growing architecture skills',
      'Talk about career growth and what the path to Senior SWE looks like',
    ],
  },
};

export function getEmployeeInsights(employeeId: string): EmployeeInsights {
  return insights[employeeId] ?? {
    employeeId,
    recentWins: [],
    risks: [],
    openLoops: [],
    managerTalkingPoints: [],
    employeeTalkingPoints: [],
  };
}

export const invisibleWorkPrompts: InvisibleWorkPrompt[] = [
  {
    category: 'Mentorship & Coaching',
    managerPrompt: 'Ask about mentoring, new hire support, or coaching moments this cycle.',
    employeePrompt: 'Any mentoring or coaching you want to highlight?',
  },
  {
    category: 'Cross-team Coordination',
    managerPrompt: 'Discuss coordination or alignment work with other teams.',
    employeePrompt: 'Any cross-team or stakeholder alignment work you drove?',
  },
  {
    category: 'Architecture & Strategy',
    managerPrompt: 'Review design docs, architectural discussions, or planning contributions.',
    employeePrompt: 'Design or architecture thinking you contributed to?',
  },
  {
    category: 'Glue Work',
    managerPrompt: 'Ask about documentation, process improvements, or operational cleanup.',
    employeePrompt: 'Any process improvements, documentation, or glue work?',
  },
  {
    category: 'Technical Leadership',
    managerPrompt: 'Discuss standards work, review guidance, or influence on engineering decisions.',
    employeePrompt: 'Any technical leadership or influence on standards, decisions, or reviews?',
  },
];
