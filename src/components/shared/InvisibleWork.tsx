import { invisibleWorkPrompts } from '../../data/insights';

interface InvisibleWorkProps {
  viewMode: 'manager' | 'employee';
}

export function InvisibleWork({ viewMode }: InvisibleWorkProps) {
  const title = viewMode === 'manager'
    ? 'Invisible Work & Strategic Contributions'
    : 'Invisible Work to Highlight';

  const subtitle = viewMode === 'manager'
    ? 'Prompts to surface work not captured in tool signals:'
    : 'Consider highlighting these contributions:';

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.75 2.75l1.5 1.5M9.75 9.75l1.5 1.5M11.25 2.75l-1.5 1.5M4.25 9.75l-1.5 1.5" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>
      <p className="text-xs text-text-muted mb-3">{subtitle}</p>
      <ul className="space-y-2">
        {invisibleWorkPrompts.map((prompt, i) => (
          <li key={i} className="flex gap-2.5 text-sm">
            <span className="text-purple-400 mt-0.5 shrink-0">&#x25C6;</span>
            <div>
              <span className="font-medium text-text-primary">{prompt.category}:</span>{' '}
              <span className="text-text-secondary">
                {viewMode === 'manager' ? prompt.managerPrompt : prompt.employeePrompt}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
