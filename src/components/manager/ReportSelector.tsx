import { employees } from '../../data/employees';
import type { Employee } from '../../types';

interface ReportSelectorProps {
  selectedId: string | null;
  onSelect: (employee: Employee) => void;
}

export function ReportSelector({ selectedId, onSelect }: ReportSelectorProps) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold text-text-primary">My Direct Reports</h2>
        <p className="text-sm text-text-secondary">Select a report to generate their 1:1 prep brief</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {employees.map(emp => {
          const isSelected = emp.id === selectedId;
          const next11 = emp.id === 'emp-001' ? 'Today, 10:00 AM'
            : emp.id === 'emp-002' ? 'Today, 11:00 AM'
            : emp.id === 'emp-003' ? 'Today, 2:00 PM'
            : 'Tomorrow, 10:00 AM';

          return (
            <button
              key={emp.id}
              onClick={() => onSelect(emp)}
              className={`text-left p-4 rounded-lg border transition-all ${
                isSelected
                  ? 'border-primary bg-primary-light shadow-sm'
                  : 'border-border bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-text-secondary'
                }`}>
                  {emp.avatarInitials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{emp.name}</p>
                  <p className="text-xs text-text-muted truncate">{emp.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2" width="9" height="8" rx="1" stroke="currentColor" strokeWidth="1"/><path d="M1.5 4.5h9M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
                <span>Next 1:1: {next11}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
