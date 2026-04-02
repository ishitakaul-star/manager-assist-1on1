import type { Employee } from '../types';

export const manager: Employee = {
  id: 'mgr-001',
  name: 'Ray Martinez',
  role: 'Engineering Manager',
  team: 'Platform Services',
  avatarInitials: 'RM',
  managerId: '',
  startDate: '2021-03-15',
};

export const employees: Employee[] = [
  {
    id: 'emp-001',
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
    team: 'Platform Services',
    avatarInitials: 'SC',
    managerId: 'mgr-001',
    startDate: '2022-06-01',
  },
  {
    id: 'emp-002',
    name: 'Marcus Johnson',
    role: 'Software Engineer II',
    team: 'Platform Services',
    avatarInitials: 'MJ',
    managerId: 'mgr-001',
    startDate: '2024-09-15',
  },
  {
    id: 'emp-003',
    name: 'Priya Patel',
    role: 'Staff Software Engineer',
    team: 'Platform Services',
    avatarInitials: 'PP',
    managerId: 'mgr-001',
    startDate: '2020-01-10',
  },
  {
    id: 'emp-004',
    name: 'David Kim',
    role: 'Software Engineer II',
    team: 'Platform Services',
    avatarInitials: 'DK',
    managerId: 'mgr-001',
    startDate: '2023-03-01',
  },
];

export function getEmployee(id: string): Employee | undefined {
  if (id === manager.id) return manager;
  return employees.find(e => e.id === id);
}
