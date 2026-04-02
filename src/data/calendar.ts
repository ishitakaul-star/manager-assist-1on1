import type { CalendarMeeting } from '../types';

const meetings: CalendarMeeting[] = [
  // Sarah Chen - emp-001 (moderate meeting load)
  { id: 'cal-1', employeeId: 'emp-001', title: 'Sprint Planning', startTime: '2026-03-31T10:00', endTime: '2026-03-31T11:00', type: 'ceremonial', durationMinutes: 60 },
  { id: 'cal-2', employeeId: 'emp-001', title: 'Payment Platform Design Review', startTime: '2026-03-31T14:00', endTime: '2026-03-31T15:00', type: 'tech_collab', durationMinutes: 60 },
  { id: 'cal-3', employeeId: 'emp-001', title: '1:1 with Ray', startTime: '2026-04-02T10:00', endTime: '2026-04-02T10:30', type: 'manager_org', durationMinutes: 30 },
  { id: 'cal-4', employeeId: 'emp-001', title: 'Code Review Sync', startTime: '2026-04-01T11:00', endTime: '2026-04-01T11:30', type: 'tech_collab', durationMinutes: 30 },
  { id: 'cal-5', employeeId: 'emp-001', title: 'Checkout API Dep Sync', startTime: '2026-04-01T15:00', endTime: '2026-04-01T15:30', type: 'cross_functional', durationMinutes: 30 },
  { id: 'cal-6', employeeId: 'emp-001', title: 'Team Standup', startTime: '2026-04-01T09:30', endTime: '2026-04-01T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-7', employeeId: 'emp-001', title: 'Team Standup', startTime: '2026-04-02T09:30', endTime: '2026-04-02T09:45', type: 'ceremonial', durationMinutes: 15 },

  // Marcus Johnson - emp-002 (low meeting load)
  { id: 'cal-10', employeeId: 'emp-002', title: 'Sprint Planning', startTime: '2026-03-31T10:00', endTime: '2026-03-31T11:00', type: 'ceremonial', durationMinutes: 60 },
  { id: 'cal-11', employeeId: 'emp-002', title: '1:1 with Ray', startTime: '2026-04-02T11:00', endTime: '2026-04-02T11:30', type: 'manager_org', durationMinutes: 30 },
  { id: 'cal-12', employeeId: 'emp-002', title: 'Team Standup', startTime: '2026-04-01T09:30', endTime: '2026-04-01T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-13', employeeId: 'emp-002', title: 'Team Standup', startTime: '2026-04-02T09:30', endTime: '2026-04-02T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-14', employeeId: 'emp-002', title: 'Auth Middleware Pairing', startTime: '2026-04-01T14:00', endTime: '2026-04-01T15:00', type: 'tech_collab', durationMinutes: 60 },

  // Priya Patel - emp-003 (heavy meeting load)
  { id: 'cal-20', employeeId: 'emp-003', title: 'Sprint Planning', startTime: '2026-03-31T10:00', endTime: '2026-03-31T11:00', type: 'ceremonial', durationMinutes: 60 },
  { id: 'cal-21', employeeId: 'emp-003', title: 'Architecture Review Board', startTime: '2026-03-31T13:00', endTime: '2026-03-31T14:00', type: 'tech_collab', durationMinutes: 60 },
  { id: 'cal-22', employeeId: 'emp-003', title: 'Incident Retrospective: Notif Outage', startTime: '2026-03-31T15:00', endTime: '2026-03-31T16:00', type: 'operational', durationMinutes: 60 },
  { id: 'cal-23', employeeId: 'emp-003', title: '1:1 with Ray', startTime: '2026-04-02T14:00', endTime: '2026-04-02T14:30', type: 'manager_org', durationMinutes: 30 },
  { id: 'cal-24', employeeId: 'emp-003', title: 'Cross-team Notification Integration Sync', startTime: '2026-04-01T10:00', endTime: '2026-04-01T10:45', type: 'cross_functional', durationMinutes: 45 },
  { id: 'cal-25', employeeId: 'emp-003', title: 'SMS Provider Vendor Call', startTime: '2026-04-01T11:00', endTime: '2026-04-01T11:30', type: 'cross_functional', durationMinutes: 30 },
  { id: 'cal-26', employeeId: 'emp-003', title: 'Tech Talk: Event Sourcing Patterns', startTime: '2026-04-01T16:00', endTime: '2026-04-01T17:00', type: 'knowledge_share', durationMinutes: 60 },
  { id: 'cal-27', employeeId: 'emp-003', title: 'Team Standup', startTime: '2026-04-01T09:30', endTime: '2026-04-01T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-28', employeeId: 'emp-003', title: 'Team Standup', startTime: '2026-04-02T09:30', endTime: '2026-04-02T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-29', employeeId: 'emp-003', title: 'Platform All-Hands', startTime: '2026-04-02T11:00', endTime: '2026-04-02T12:00', type: 'manager_org', durationMinutes: 60 },
  { id: 'cal-30', employeeId: 'emp-003', title: 'On-call Handoff', startTime: '2026-04-01T09:00', endTime: '2026-04-01T09:15', type: 'operational', durationMinutes: 15 },

  // David Kim - emp-004 (moderate meeting load)
  { id: 'cal-40', employeeId: 'emp-004', title: 'Sprint Planning', startTime: '2026-03-31T10:00', endTime: '2026-03-31T11:00', type: 'ceremonial', durationMinutes: 60 },
  { id: 'cal-41', employeeId: 'emp-004', title: '1:1 with Ray', startTime: '2026-04-03T10:00', endTime: '2026-04-03T10:30', type: 'manager_org', durationMinutes: 30 },
  { id: 'cal-42', employeeId: 'emp-004', title: 'Reporting DB Migration Planning', startTime: '2026-04-01T13:00', endTime: '2026-04-01T14:00', type: 'tech_collab', durationMinutes: 60 },
  { id: 'cal-43', employeeId: 'emp-004', title: 'Team Standup', startTime: '2026-04-01T09:30', endTime: '2026-04-01T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-44', employeeId: 'emp-004', title: 'Team Standup', startTime: '2026-04-02T09:30', endTime: '2026-04-02T09:45', type: 'ceremonial', durationMinutes: 15 },
  { id: 'cal-45', employeeId: 'emp-004', title: 'Finance Team Report Req Sync', startTime: '2026-04-02T15:00', endTime: '2026-04-02T15:30', type: 'cross_functional', durationMinutes: 30 },
];

export function getCalendarMeetings(employeeId: string): CalendarMeeting[] {
  return meetings.filter(m => m.employeeId === employeeId);
}

export function getCalendarSummary(employeeId: string) {
  const empMeetings = getCalendarMeetings(employeeId);
  const totalMinutes = empMeetings.reduce((sum, m) => sum + m.durationMinutes, 0);
  const byType = empMeetings.reduce((acc, m) => {
    acc[m.type] = (acc[m.type] ?? 0) + m.durationMinutes;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalMeetings: empMeetings.length,
    totalMinutes,
    totalHours: Math.round(totalMinutes / 60 * 10) / 10,
    ceremonial: byType['ceremonial'] ?? 0,
    techCollab: byType['tech_collab'] ?? 0,
    operational: byType['operational'] ?? 0,
    crossFunctional: byType['cross_functional'] ?? 0,
    knowledgeShare: byType['knowledge_share'] ?? 0,
    managerOrg: byType['manager_org'] ?? 0,
    other: byType['other'] ?? 0,
  };
}
