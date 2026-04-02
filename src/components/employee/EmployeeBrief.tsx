import type { Employee } from '../../types';
import { getEmployeeInsights } from '../../data/insights';
import { Disclaimer } from '../shared/Disclaimer';
import { WorkloadSnapshot } from '../shared/WorkloadSnapshot';
import { TimeDistribution } from '../shared/TimeDistribution';
import { RecentWins } from '../shared/RecentWins';
import { RisksAndFlags } from '../shared/RisksAndFlags';
import { OpenLoops } from '../shared/OpenLoops';
import { InvisibleWork } from '../shared/InvisibleWork';
import { TalkingPoints } from '../shared/TalkingPoints';
import { AgendaBuilder } from '../shared/AgendaBuilder';

interface EmployeeBriefProps {
  employee: Employee;
}

export function EmployeeBrief({ employee }: EmployeeBriefProps) {
  const insights = getEmployeeInsights(employee.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            My 1:1 Prep Brief
          </h2>
          <p className="text-sm text-text-secondary">
            {employee.name} &middot; {employee.role}
          </p>
        </div>
        <span className="text-xs text-text-muted">Since last 1:1 (Mar 19, 2026)</span>
      </div>

      <Disclaimer />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left column: My data */}
        <div className="lg:col-span-2 space-y-4">
          <WorkloadSnapshot employeeId={employee.id} />
          <TimeDistribution employeeId={employee.id} />
          <RecentWins wins={insights.recentWins} viewMode="employee" employeeName={employee.name.split(' ')[0]} />
          <RisksAndFlags risks={insights.risks} />
          <OpenLoops loops={insights.openLoops} />
          <InvisibleWork viewMode="employee" />
        </div>

        {/* Right column: Agenda + talking points */}
        <div className="space-y-4">
          <AgendaBuilder employeeId={employee.id} viewMode="employee" employeeName="Ray" />
          <TalkingPoints points={insights.employeeTalkingPoints} viewMode="employee" />
        </div>
      </div>
    </div>
  );
}
