import { useState } from 'react';
import { employees } from '../../data/employees';
import type { Employee } from '../../types';
import { PageContainer } from '../layout/PageContainer';
import { EmployeeBrief } from './EmployeeBrief';

export function EmployeeView() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <PageContainer>
      {!selectedEmployee ? (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Log in as Employee</h2>
            <p className="text-sm text-text-secondary">Select your identity to see your 1:1 prep brief (demo only)</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {employees.map(emp => {
              const next11 = emp.id === 'emp-001' ? 'Today, 10:00 AM'
                : emp.id === 'emp-002' ? 'Today, 11:00 AM'
                : emp.id === 'emp-003' ? 'Today, 2:00 PM'
                : 'Tomorrow, 10:00 AM';

              return (
                <button
                  key={emp.id}
                  onClick={() => setSelectedEmployee(emp)}
                  className="text-left p-4 rounded-lg border border-border bg-white hover:border-green-400 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-sm font-semibold text-green-700">
                      {emp.avatarInitials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">{emp.name}</p>
                      <p className="text-xs text-text-muted truncate">{emp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2" width="9" height="8" rx="1" stroke="currentColor" strokeWidth="1"/><path d="M1.5 4.5h9M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
                    <span>1:1 with Ray: {next11}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedEmployee(null)}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors mb-4 flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Switch employee
          </button>
          <EmployeeBrief employee={selectedEmployee} />
        </div>
      )}
    </PageContainer>
  );
}
