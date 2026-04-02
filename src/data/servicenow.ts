import type { SnowIncident } from '../types';

const incidents: SnowIncident[] = [
  // Alex Rivera
  { id: 'snow-1', number: 'INC0045678', shortDescription: 'Payment processing timeout during peak hours', priority: 1, state: 'Resolved', assignedToId: 'emp-001', createdAt: '2026-03-26', resolvedAt: '2026-03-26', isMajor: true, slackChannel: '#inc-payment-timeout-0326' },
  { id: 'snow-2', number: 'INC0045712', shortDescription: 'Checkout API 5xx errors intermittent', priority: 2, state: 'Resolved', assignedToId: 'emp-001', createdAt: '2026-03-29', resolvedAt: '2026-03-30', isMajor: false, slackChannel: null },

  // Blake Torres
  { id: 'snow-3', number: 'INC0045690', shortDescription: 'User profile page loading slowly', priority: 3, state: 'Resolved', assignedToId: 'emp-002', createdAt: '2026-03-28', resolvedAt: '2026-03-28', isMajor: false, slackChannel: null },

  // Casey Nair
  { id: 'snow-4', number: 'INC0045650', shortDescription: 'Notification service complete outage (multi-region)', priority: 1, state: 'Resolved', assignedToId: 'emp-003', createdAt: '2026-03-24', resolvedAt: '2026-03-25', isMajor: true, slackChannel: '#inc-notif-outage-0324' },
  { id: 'snow-5', number: 'INC0045701', shortDescription: 'SMS delivery failures for US-East region', priority: 2, state: 'In Progress', assignedToId: 'emp-003', createdAt: '2026-03-31', resolvedAt: null, isMajor: true, slackChannel: '#inc-sms-failures-0331' },
  { id: 'snow-6', number: 'INC0045720', shortDescription: 'DLQ backlog exceeding threshold', priority: 2, state: 'In Progress', assignedToId: 'emp-003', createdAt: '2026-04-01', resolvedAt: null, isMajor: false, slackChannel: null },

  // Drew Park
  { id: 'snow-7', number: 'INC0045695', shortDescription: 'Report scheduler producing empty CSV files', priority: 3, state: 'Resolved', assignedToId: 'emp-004', createdAt: '2026-03-27', resolvedAt: '2026-03-28', isMajor: false, slackChannel: null },
];

export function getSnowIncidents(employeeId: string): SnowIncident[] {
  return incidents.filter(i => i.assignedToId === employeeId);
}

export function getSnowSummary(employeeId: string) {
  const empIncidents = getSnowIncidents(employeeId);
  return {
    total: empIncidents.length,
    resolved: empIncidents.filter(i => i.state === 'Resolved' || i.state === 'Closed').length,
    open: empIncidents.filter(i => i.state === 'New' || i.state === 'In Progress').length,
    majorIncidents: empIncidents.filter(i => i.isMajor).length,
    p1Count: empIncidents.filter(i => i.priority === 1).length,
    p2Count: empIncidents.filter(i => i.priority === 2).length,
  };
}
