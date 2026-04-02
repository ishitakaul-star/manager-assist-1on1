import { useState } from 'react';
import type { ViewMode } from './types';
import { Header } from './components/layout/Header';
import { LandingPage } from './components/landing/LandingPage';
import { ManagerView } from './components/manager/ManagerView';
import { EmployeeView } from './components/employee/EmployeeView';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');

  return (
    <div className="min-h-screen bg-surface">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      {currentView === 'landing' && <LandingPage onNavigate={setCurrentView} />}
      {currentView === 'manager' && <ManagerView />}
      {currentView === 'employee' && <EmployeeView />}
    </div>
  );
}

export default App;
