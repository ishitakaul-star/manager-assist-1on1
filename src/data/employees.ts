import type { Employee } from '../types';

export const manager: Employee = {
  id: 'mgr-001',
  name: 'Jordan Lee',
  role: 'Engineering Manager',
  team: 'Platform Services',
  avatarInitials: 'JL',
  managerId: '',
  startDate: '2021-03-15',
};

export const employees: Employee[] = [
  {
    id: 'emp-001',
    name: 'Alex Rivera',
    role: 'Senior Software Engineer',
    team: 'Platform Services',
    avatarInitials: 'AR',
    managerId: 'mgr-001',
    startDate: '2022-06-01',
  },
  {
    id: 'emp-002',
    name: 'Blake Torres',
    role: 'Software Engineer II',
    team: 'Platform Services',
    avatarInitials: 'BT',
    managerId: 'mgr-001',
    startDate: '2024-09-15',
  },
  {
    id: 'emp-003',
    name: 'Casey Nair',
    role: 'Staff Software Engineer',
    team: 'Platform Services',
    avatarInitials: 'CN',
    managerId: 'mgr-001',
    startDate: '2020-01-10',
  },
  {
    id: 'emp-004',
    name: 'Drew Park',
    role: 'Software Engineer II',
    team: 'Platform Services',
    avatarInitials: 'DP',
    managerId: 'mgr-001',
    startDate: '2023-03-01',
  },
];

export function getEmployee(id: string): Employee | undefined {
  if (id === manager.id) return manager;
  return employees.find(e => e.id === id);
}
