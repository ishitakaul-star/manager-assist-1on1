import type { ViewMode } from '../../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentView !== 'landing' && (
            <button
              onClick={() => onNavigate('landing')}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2a2 2 0 100 4 2 2 0 000-4zM4 6a2 2 0 100 4 2 2 0 000-4zM12 6a2 2 0 100 4 2 2 0 000-4zM8 10a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
            </div>
            <span className="font-semibold text-text-primary">Manager Assist</span>
            <span className="text-text-muted text-sm">1:1 Agent</span>
          </div>
        </div>
        {currentView !== 'landing' && (
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              currentView === 'manager'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-green-100 text-green-700'
            }`}>
              {currentView === 'manager' ? 'Manager View' : 'Employee View'}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
