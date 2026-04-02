import type { PagerDutyData } from '../types';

const pdData: Record<string, PagerDutyData> = {
  'emp-001': {
    employeeId: 'emp-001',
    isOnCall: true,
    onCallSchedule: 'Primary, Payment Platform (ends Apr 5)',
    incidentsLast30Days: 4,
    afterHoursPages: 2,
    weekendPages: 1,
    lastPagedAt: '2026-03-30T23:15:00Z',
  },
  'emp-002': {
    employeeId: 'emp-002',
    isOnCall: false,
    onCallSchedule: null,
    incidentsLast30Days: 0,
    afterHoursPages: 0,
    weekendPages: 0,
    lastPagedAt: null,
  },
  'emp-003': {
    employeeId: 'emp-003',
    isOnCall: false,
    onCallSchedule: 'Secondary, Notification Platform (next rotation Apr 12)',
    incidentsLast30Days: 6,
    afterHoursPages: 3,
    weekendPages: 2,
    lastPagedAt: '2026-04-01T02:30:00Z',
  },
  'emp-004': {
    employeeId: 'emp-004',
    isOnCall: false,
    onCallSchedule: null,
    incidentsLast30Days: 1,
    afterHoursPages: 0,
    weekendPages: 0,
    lastPagedAt: '2026-03-27T14:00:00Z',
  },
};

export function getPagerDutyData(employeeId: string): PagerDutyData {
  return pdData[employeeId] ?? {
    employeeId,
    isOnCall: false,
    onCallSchedule: null,
    incidentsLast30Days: 0,
    afterHoursPages: 0,
    weekendPages: 0,
    lastPagedAt: null,
  };
}
