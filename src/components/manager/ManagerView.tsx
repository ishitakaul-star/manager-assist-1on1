import { useState } from 'react';
import type { Employee } from '../../types';
import { PageContainer } from '../layout/PageContainer';
import { ReportSelector } from './ReportSelector';
import { ManagerBrief } from './ManagerBrief';

export function ManagerView() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <PageContainer>
      <ReportSelector
        selectedId={selectedEmployee?.id ?? null}
        onSelect={setSelectedEmployee}
      />
      {selectedEmployee && (
        <ManagerBrief employee={selectedEmployee} />
      )}
    </PageContainer>
  );
}
