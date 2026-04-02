import type { RiskItem } from '../../types';

interface RisksAndFlagsProps {
  risks: RiskItem[];
}

export function RisksAndFlags({ risks }: RisksAndFlagsProps) {
  if (risks.length === 0) return null;

  const severityColors = {
    high: { bg: 'bg-danger-light', text: 'text-danger', label: 'High' },
    medium: { bg: 'bg-warning-light', text: 'text-warning', label: 'Medium' },
    low: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'Low' },
  };

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-warning-light flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L1 13h12L7 1z" stroke="#d97706" strokeWidth="1.2" strokeLinejoin="round" fill="none"/><path d="M7 5v3M7 10v.5" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </div>
        <h3 className="text-sm font-semibold text-text-primary">Risks &amp; Flags</h3>
      </div>
      <ul className="space-y-2.5">
        {risks.map((risk, i) => {
          const sev = severityColors[risk.severity];
          return (
            <li key={i} className="flex gap-2 text-sm">
              <span className={`shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded ${sev.bg} ${sev.text} mt-0.5`}>
                {sev.label}
              </span>
              <div className="space-y-0.5">
                <p className="text-text-primary">{risk.text}</p>
                <p className="text-xs text-text-muted">{risk.source}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
