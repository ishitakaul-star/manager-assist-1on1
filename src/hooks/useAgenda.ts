import { useCallback } from 'react';
import type { AgendaItem } from '../types';
import { useLocalStorage } from './useLocalStorage';

function generateId(): string {
  return `agenda-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const defaultAgendaItems: AgendaItem[] = [
  { id: 'sys-1', text: 'Review key wins since last 1:1', addedBy: 'system', completed: false, order: 0, category: 'wins' },
  { id: 'sys-2', text: 'Discuss current workload (tickets, incidents, PRs)', addedBy: 'system', completed: false, order: 1, category: 'workload' },
  { id: 'sys-3', text: 'Talk through any flagged risks or blockers', addedBy: 'system', completed: false, order: 2, category: 'risks' },
  { id: 'sys-4', text: 'Invisible work and strategic contributions', addedBy: 'system', completed: false, order: 3, category: 'invisible_work' },
  { id: 'sys-5', text: 'Agree on next steps and action items', addedBy: 'system', completed: false, order: 4, category: 'custom' },
];

export function useAgenda(employeeId: string) {
  const [items, setItems] = useLocalStorage<AgendaItem[]>(
    `agenda-${employeeId}`,
    defaultAgendaItems,
  );

  const addItem = useCallback((text: string, addedBy: 'manager' | 'employee', category: AgendaItem['category'] = 'custom') => {
    setItems(prev => [
      ...prev,
      {
        id: generateId(),
        text,
        addedBy,
        completed: false,
        order: prev.length,
        category,
      },
    ]);
  }, [setItems]);

  const updateItem = useCallback((id: string, updates: Partial<AgendaItem>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  }, [setItems]);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id).map((item, i) => ({ ...item, order: i })));
  }, [setItems]);

  const moveItem = useCallback((fromIndex: number, toIndex: number) => {
    setItems(prev => {
      const result = [...prev];
      const [removed] = result.splice(fromIndex, 1);
      result.splice(toIndex, 0, removed);
      return result.map((item, i) => ({ ...item, order: i }));
    });
  }, [setItems]);

  const resetAgenda = useCallback(() => {
    setItems(defaultAgendaItems);
  }, [setItems]);

  return { items, addItem, updateItem, removeItem, moveItem, resetAgenda };
}
