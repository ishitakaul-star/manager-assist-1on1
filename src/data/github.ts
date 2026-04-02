import type { GitHubActivity } from '../types';

const activities: Record<string, GitHubActivity> = {
  'emp-001': {
    employeeId: 'emp-001',
    prsOpened: 4,
    prsMerged: 3,
    prsReviewed: 7,
    commitsLast14Days: 28,
    recentPRs: [
      { title: 'feat: migrate payment gateway to v3 API', repo: 'platform/payment-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-25', linesAdded: 1240, linesRemoved: 890, afterHours: false },
      { title: 'fix: add retry logic for idempotent txns', repo: 'platform/payment-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-28', linesAdded: 320, linesRemoved: 45, afterHours: false },
      { title: 'feat: observability dashboards for payment latency', repo: 'platform/payment-service', state: 'open', reviewStatus: 'pending', createdAt: '2026-04-01', linesAdded: 580, linesRemoved: 20, afterHours: false },
      { title: 'fix: race condition in concurrent checkout', repo: 'platform/payment-service', state: 'open', reviewStatus: null, createdAt: '2026-04-01', linesAdded: 210, linesRemoved: 85, afterHours: true },
    ],
  },
  'emp-002': {
    employeeId: 'emp-002',
    prsOpened: 2,
    prsMerged: 1,
    prsReviewed: 2,
    commitsLast14Days: 12,
    recentPRs: [
      { title: 'fix: null pointer in profile update handler', repo: 'platform/user-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-26', linesAdded: 45, linesRemoved: 12, afterHours: false },
      { title: 'feat: user preferences API endpoint', repo: 'platform/user-service', state: 'open', reviewStatus: 'changes_requested', createdAt: '2026-03-31', linesAdded: 380, linesRemoved: 15, afterHours: false },
    ],
  },
  'emp-003': {
    employeeId: 'emp-003',
    prsOpened: 5,
    prsMerged: 4,
    prsReviewed: 12,
    commitsLast14Days: 35,
    recentPRs: [
      { title: 'feat: event-driven notification system', repo: 'platform/notification-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-20', linesAdded: 2100, linesRemoved: 340, afterHours: false },
      { title: 'refactor: horizontal scaling for MQ consumer', repo: 'platform/notification-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-27', linesAdded: 890, linesRemoved: 620, afterHours: false },
      { title: 'fix: DLQ consumer retry backoff', repo: 'platform/notification-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-30', linesAdded: 180, linesRemoved: 55, afterHours: true },
      { title: 'docs: ITAD multi-region failover', repo: 'platform/architecture-docs', state: 'open', reviewStatus: 'pending', createdAt: '2026-04-01', linesAdded: 450, linesRemoved: 0, afterHours: false },
      { title: 'chore: update Terraform notification infra', repo: 'platform/infra', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-29', linesAdded: 120, linesRemoved: 85, afterHours: false },
    ],
  },
  'emp-004': {
    employeeId: 'emp-004',
    prsOpened: 3,
    prsMerged: 2,
    prsReviewed: 4,
    commitsLast14Days: 18,
    recentPRs: [
      { title: 'feat: CSV export for transaction reports', repo: 'platform/reporting-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-25', linesAdded: 520, linesRemoved: 30, afterHours: false },
      { title: 'fix: timezone conversion in report scheduler', repo: 'platform/reporting-service', state: 'merged', reviewStatus: 'approved', createdAt: '2026-03-29', linesAdded: 95, linesRemoved: 40, afterHours: false },
      { title: 'feat: pagination for large report queries', repo: 'platform/reporting-service', state: 'open', reviewStatus: 'pending', createdAt: '2026-04-01', linesAdded: 340, linesRemoved: 120, afterHours: false },
    ],
  },
};

export function getGitHubActivity(employeeId: string): GitHubActivity {
  return activities[employeeId] ?? {
    employeeId,
    prsOpened: 0,
    prsMerged: 0,
    prsReviewed: 0,
    commitsLast14Days: 0,
    recentPRs: [],
  };
}
