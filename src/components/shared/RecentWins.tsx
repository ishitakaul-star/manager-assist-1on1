import type { WinItem } from '../../types';

interface RecentWinsProps {
  wins: WinItem[];
  viewMode: 'manager' | 'employee';
  employeeName: string;
}

function SourceBadge({ source }: { source: string }) {
  const colors: Record<string, string> = {
    Jira: 'bg-blue-100 text-blue-700',
    GitHub: 'bg-gray-100 text-gray-700',
    SNOW: 'bg-orange-100 text-orange-700',
    PagerDuty: 'bg-red-100 text-red-700',
    Calendar: 'bg-purple-100 text-purple-700',
  };
  return (
    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${colors[source] ?? 'bg-gray-100 text-gray-600'}`}>
      {source}
    </span>
  );
}

export function RecentWins({ wins, viewMode, employeeName }: RecentWinsProps) {
  if (wins.length === 0) return null;

  const title = viewMode === 'manager'
    ? `${employeeName}'s Recent Wins`
    : 'My Recent Wins';

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-success-light flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {wins.map((win, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span className="text-success mt-0.5 shrink-0">&bull;</span>
            <div className="space-y-1">
              <p className="text-text-primary">{win.text}</p>
              <div className="flex items-center gap-2">
                <SourceBadge source={win.source} />
                <span className="text-xs text-text-muted">{win.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
