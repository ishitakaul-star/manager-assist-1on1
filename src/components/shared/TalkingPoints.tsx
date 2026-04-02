interface TalkingPointsProps {
  points: string[];
  viewMode: 'manager' | 'employee';
}

export function TalkingPoints({ points, viewMode }: TalkingPointsProps) {
  if (points.length === 0) return null;

  const title = viewMode === 'manager'
    ? 'Suggested Talking Points'
    : 'Potential Talking Points';

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
          viewMode === 'manager' ? 'bg-blue-50' : 'bg-green-50'
        }`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 3h10M2 7h6M2 11h8" stroke={viewMode === 'manager' ? '#2563eb' : '#16a34a'} strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span className={`mt-0.5 shrink-0 ${viewMode === 'manager' ? 'text-primary' : 'text-success'}`}>&rarr;</span>
            <span className="text-text-secondary">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
