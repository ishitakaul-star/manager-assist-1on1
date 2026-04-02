import type { JiraTicket } from '../types';

const allTickets: JiraTicket[] = [
  // Sarah Chen - emp-001
  { key: 'PLAT-1234', summary: 'Migrate payment gateway to v3 API', status: 'Done', priority: 'High', type: 'Feature', assigneeId: 'emp-001', storyPoints: 8, sprintName: 'Sprint 24', updatedAt: '2026-03-28', dueDate: '2026-03-29', project: 'Payment Platform' },
  { key: 'PLAT-1241', summary: 'Add retry logic for idempotent transactions', status: 'Done', priority: 'High', type: 'Improvement', assigneeId: 'emp-001', storyPoints: 5, sprintName: 'Sprint 24', updatedAt: '2026-03-30', dueDate: '2026-04-01', project: 'Payment Platform' },
  { key: 'PLAT-1256', summary: 'Fix race condition in concurrent checkout flow', status: 'In Progress', priority: 'Critical', type: 'Bug', assigneeId: 'emp-001', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-04-01', dueDate: '2026-04-04', project: 'Payment Platform' },
  { key: 'PLAT-1260', summary: 'Add observability dashboards for payment latency', status: 'In Review', priority: 'Medium', type: 'Task', assigneeId: 'emp-001', storyPoints: 3, sprintName: 'Sprint 25', updatedAt: '2026-04-01', dueDate: '2026-04-05', project: 'Payment Platform' },
  { key: 'PLAT-1270', summary: 'Deprecate legacy webhook handler', status: 'To Do', priority: 'Low', type: 'Improvement', assigneeId: 'emp-001', storyPoints: 3, sprintName: 'Sprint 25', updatedAt: '2026-03-28', dueDate: null, project: 'Payment Platform' },

  // Marcus Johnson - emp-002
  { key: 'PLAT-1245', summary: 'Implement user preferences API endpoint', status: 'In Progress', priority: 'Medium', type: 'Feature', assigneeId: 'emp-002', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-04-01', dueDate: '2026-04-04', project: 'User Service' },
  { key: 'PLAT-1248', summary: 'Fix null pointer in profile update handler', status: 'Done', priority: 'High', type: 'Bug', assigneeId: 'emp-002', storyPoints: 2, sprintName: 'Sprint 24', updatedAt: '2026-03-27', dueDate: '2026-03-28', project: 'User Service' },
  { key: 'PLAT-1253', summary: 'Add unit tests for auth middleware', status: 'Blocked', priority: 'Medium', type: 'Task', assigneeId: 'emp-002', storyPoints: 3, sprintName: 'Sprint 25', updatedAt: '2026-03-25', dueDate: '2026-04-02', project: 'User Service' },
  { key: 'PLAT-1262', summary: 'Update OpenAPI spec for user endpoints', status: 'To Do', priority: 'Low', type: 'Task', assigneeId: 'emp-002', storyPoints: 2, sprintName: 'Sprint 25', updatedAt: '2026-03-29', dueDate: '2026-04-07', project: 'User Service' },

  // Priya Patel - emp-003
  { key: 'PLAT-1220', summary: 'Design and implement event-driven notification system', status: 'Done', priority: 'High', type: 'Feature', assigneeId: 'emp-003', storyPoints: 13, sprintName: 'Sprint 24', updatedAt: '2026-03-29', dueDate: '2026-03-28', project: 'Notification Platform' },
  { key: 'PLAT-1235', summary: 'Refactor message queue consumer for horizontal scaling', status: 'Done', priority: 'High', type: 'Improvement', assigneeId: 'emp-003', storyPoints: 8, sprintName: 'Sprint 24', updatedAt: '2026-03-31', dueDate: '2026-04-01', project: 'Notification Platform' },
  { key: 'PLAT-1250', summary: 'Investigate intermittent DLQ message build-up', status: 'In Progress', priority: 'Critical', type: 'Bug', assigneeId: 'emp-003', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-04-01', dueDate: '2026-04-03', project: 'Notification Platform' },
  { key: 'PLAT-1258', summary: 'Write ITAD for multi-region failover strategy', status: 'In Progress', priority: 'High', type: 'Task', assigneeId: 'emp-003', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-04-02', dueDate: '2026-04-07', project: 'Notification Platform' },
  { key: 'PLAT-1265', summary: 'Add circuit breaker for external SMS provider', status: 'To Do', priority: 'Medium', type: 'Feature', assigneeId: 'emp-003', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-03-30', dueDate: '2026-04-10', project: 'Notification Platform' },
  { key: 'PLAT-1268', summary: 'Update Terraform modules for notification infra', status: 'To Do', priority: 'Medium', type: 'Improvement', assigneeId: 'emp-003', storyPoints: 3, sprintName: 'Sprint 25', updatedAt: '2026-03-30', dueDate: null, project: 'Notification Platform' },

  // David Kim - emp-004
  { key: 'PLAT-1242', summary: 'Build CSV export for transaction reports', status: 'Done', priority: 'Medium', type: 'Feature', assigneeId: 'emp-004', storyPoints: 5, sprintName: 'Sprint 24', updatedAt: '2026-03-28', dueDate: '2026-03-30', project: 'Reporting Service' },
  { key: 'PLAT-1249', summary: 'Fix timezone conversion bug in report scheduler', status: 'Done', priority: 'High', type: 'Bug', assigneeId: 'emp-004', storyPoints: 3, sprintName: 'Sprint 24', updatedAt: '2026-03-30', dueDate: '2026-03-29', project: 'Reporting Service' },
  { key: 'PLAT-1255', summary: 'Add pagination to large report queries', status: 'In Progress', priority: 'Medium', type: 'Improvement', assigneeId: 'emp-004', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-04-01', dueDate: '2026-04-05', project: 'Reporting Service' },
  { key: 'PLAT-1263', summary: 'Create E2E tests for report generation pipeline', status: 'To Do', priority: 'Medium', type: 'Task', assigneeId: 'emp-004', storyPoints: 5, sprintName: 'Sprint 25', updatedAt: '2026-03-29', dueDate: '2026-04-08', project: 'Reporting Service' },
  { key: 'PLAT-1271', summary: 'Upgrade DB driver to support connection pooling v2', status: 'To Do', priority: 'Low', type: 'Improvement', assigneeId: 'emp-004', storyPoints: 3, sprintName: 'Sprint 25', updatedAt: '2026-03-30', dueDate: null, project: 'Reporting Service' },
];

export function getJiraTickets(employeeId: string): JiraTicket[] {
  return allTickets.filter(t => t.assigneeId === employeeId);
}

export function getJiraSummary(employeeId: string) {
  const tickets = getJiraTickets(employeeId);
  return {
    total: tickets.length,
    done: tickets.filter(t => t.status === 'Done').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    inReview: tickets.filter(t => t.status === 'In Review').length,
    blocked: tickets.filter(t => t.status === 'Blocked').length,
    toDo: tickets.filter(t => t.status === 'To Do').length,
    bugs: tickets.filter(t => t.type === 'Bug').length,
    features: tickets.filter(t => t.type === 'Feature').length,
    improvements: tickets.filter(t => t.type === 'Improvement').length,
    totalStoryPoints: tickets.reduce((sum, t) => sum + t.storyPoints, 0),
    completedStoryPoints: tickets.filter(t => t.status === 'Done').reduce((sum, t) => sum + t.storyPoints, 0),
    project: tickets[0]?.project ?? 'Unknown',
  };
}
