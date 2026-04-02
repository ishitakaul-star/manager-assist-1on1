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
import { GoalsProgress } from '../shared/GoalsProgress';
import { AgendaBuilder } from '../shared/AgendaBuilder';

interface ManagerBriefProps {
  employee: Employee;
}

export function ManagerBrief({ employee }: ManagerBriefProps) {
  const insights = getEmployeeInsights(employee.id);

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            Pre-1:1 Brief: {employee.name}
          </h2>
          <p className="text-sm text-text-secondary">
            {employee.role} &middot; {employee.team}
          </p>
        </div>
        <span className="text-xs text-text-muted">Since last 1:1 (Mar 19, 2026)</span>
      </div>

      <Disclaimer />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left column: Data signals */}
        <div className="lg:col-span-2 space-y-4">
          <WorkloadSnapshot employeeId={employee.id} />
          <TimeDistribution employeeId={employee.id} />
          <RecentWins wins={insights.recentWins} viewMode="manager" employeeName={employee.name.split(' ')[0]} />
          <GoalsProgress employeeId={employee.id} viewMode="manager" employeeName={employee.name.split(' ')[0]} />
          <RisksAndFlags risks={insights.risks} />
          <OpenLoops loops={insights.openLoops} />
          <InvisibleWork viewMode="manager" />
        </div>

        {/* Right column: Agenda + talking points */}
        <div className="space-y-4">
          <AgendaBuilder employeeId={employee.id} viewMode="manager" employeeName={employee.name.split(' ')[0]} />
          <TalkingPoints points={insights.managerTalkingPoints} viewMode="manager" />
        </div>
      </div>
    </div>
  );
}
