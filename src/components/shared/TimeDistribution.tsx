import { computeTimeDistribution } from '../../utils/timeDistribution';

interface TimeDistributionProps {
  employeeId: string;
}

const segments = [
  { key: 'incidents' as const, label: 'Incidents', color: 'bg-red-400', textColor: 'text-red-700' },
  { key: 'projectWork' as const, label: 'Project Work', color: 'bg-blue-400', textColor: 'text-blue-700' },
  { key: 'codeReview' as const, label: 'Code Review', color: 'bg-green-400', textColor: 'text-green-700' },
  { key: 'meetings' as const, label: 'Meetings', color: 'bg-purple-400', textColor: 'text-purple-700' },
  { key: 'other' as const, label: 'Other', color: 'bg-gray-300', textColor: 'text-gray-600' },
];

export function TimeDistribution({ employeeId }: TimeDistributionProps) {
  const dist = computeTimeDistribution(employeeId);

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <h3 className="text-sm font-semibold text-text-primary mb-3">Estimated Time Distribution</h3>
      <div className="flex rounded-full overflow-hidden h-6 mb-3">
        {segments.map(seg => {
          const value = dist[seg.key];
          if (value === 0) return null;
          return (
            <div
              key={seg.key}
              className={`${seg.color} flex items-center justify-center text-white text-xs font-medium transition-all`}
              style={{ width: `${value}%` }}
              title={`${seg.label}: ${value}%`}
            >
              {value >= 10 ? `${value}%` : ''}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {segments.map(seg => {
          const value = dist[seg.key];
          if (value === 0) return null;
          return (
            <div key={seg.key} className="flex items-center gap-1.5 text-xs">
              <div className={`w-2.5 h-2.5 rounded-full ${seg.color}`} />
              <span className={seg.textColor}>{seg.label}: ~{value}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
