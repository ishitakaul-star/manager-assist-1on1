import type { OpenLoopItem } from '../../types';

interface OpenLoopsProps {
  loops: OpenLoopItem[];
}

export function OpenLoops({ loops }: OpenLoopsProps) {
  if (loops.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#2563eb" strokeWidth="1.2"/><path d="M7 4v3.5l2 1.5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">Open Loops</h3>
      </div>
      <ul className="space-y-2.5">
        {loops.map((loop, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span className="text-primary mt-0.5 shrink-0">&#x25CB;</span>
            <div className="space-y-0.5">
              <p className="text-text-primary">{loop.text}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">{loop.source}</span>
                <span className="text-xs text-text-muted">&middot;</span>
                <span className={`text-xs ${loop.daysSinceLastUpdate > 5 ? 'text-danger' : loop.daysSinceLastUpdate > 2 ? 'text-warning' : 'text-text-muted'}`}>
                  {loop.daysSinceLastUpdate === 0 ? 'Updated today' : `${loop.daysSinceLastUpdate}d since last update`}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
