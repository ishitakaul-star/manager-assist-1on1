import type { ViewMode } from '../../types';

interface LandingPageProps {
  onNavigate: (view: ViewMode) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-6">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4a4 4 0 100 8 4 4 0 000-8zM8 12a4 4 0 100 8 4 4 0 000-8zM24 12a4 4 0 100 8 4 4 0 000-8zM16 20a4 4 0 100 8 4 4 0 000-8z"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Manager Assist</h1>
        <p className="text-lg text-text-secondary mb-1">1:1 Agent</p>
        <p className="text-sm text-text-muted max-w-md mx-auto">
          Turn unstructured 1:1s into high-signal, 30-minute conversations. Auto-generated briefs and shared agendas grounded in real data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <button
          onClick={() => onNavigate('manager')}
          className="group bg-white rounded-xl border border-border p-8 text-left hover:border-primary hover:shadow-lg transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-text-primary mb-2">Manager Assist</h2>
          <p className="text-sm text-text-secondary">
            Pre-1:1 brief for your direct reports. See workload snapshots, recent wins, risks, and build a shared agenda.
          </p>
          <div className="mt-4 text-sm font-medium text-primary group-hover:underline">
            Open Manager View &rarr;
          </div>
        </button>

        <button
          onClick={() => onNavigate('employee')}
          className="group bg-white rounded-xl border border-border p-8 text-left hover:border-green-500 hover:shadow-lg transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-text-primary mb-2">Employee Assist</h2>
          <p className="text-sm text-text-secondary">
            Your 1:1 prep brief. See what you have done, what to raise, and prepare to advocate for yourself.
          </p>
          <div className="mt-4 text-sm font-medium text-green-600 group-hover:underline">
            Open Employee View &rarr;
          </div>
        </button>
      </div>

      <p className="text-xs text-text-muted mt-8">MVP Prototype &middot; PD Population &middot; Mock Data</p>
    </div>
  );
}
