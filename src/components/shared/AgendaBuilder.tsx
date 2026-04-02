import { useState } from 'react';
import type { AgendaItem } from '../../types';
import { useAgenda } from '../../hooks/useAgenda';

interface AgendaBuilderProps {
  employeeId: string;
  viewMode: 'manager' | 'employee';
  employeeName: string;
}

function AddedByBadge({ addedBy }: { addedBy: AgendaItem['addedBy'] }) {
  if (addedBy === 'system') return <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">System</span>;
  if (addedBy === 'manager') return <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">Manager</span>;
  return <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-600">Employee</span>;
}

function CategoryBadge({ category }: { category?: AgendaItem['category'] }) {
  if (!category || category === 'custom') return null;
  const labels: Record<string, string> = {
    wins: 'Wins',
    workload: 'Workload',
    risks: 'Risks',
    invisible_work: 'Invisible Work',
    growth: 'Growth',
  };
  return <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-50 text-gray-500">{labels[category] ?? category}</span>;
}

export function AgendaBuilder({ employeeId, viewMode, employeeName }: AgendaBuilderProps) {
  const { items, addItem, updateItem, removeItem, moveItem, resetAgenda } = useAgenda(employeeId);
  const [newItemText, setNewItemText] = useState('');
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleAdd = () => {
    const text = newItemText.trim();
    if (!text) return;
    addItem(text, viewMode);
    setNewItemText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
            viewMode === 'manager' ? 'bg-blue-50' : 'bg-green-50'
          }`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="2" width="10" height="10" rx="1.5" stroke={viewMode === 'manager' ? '#2563eb' : '#16a34a'} strokeWidth="1.2"/>
              <path d="M5 7h4M7 5v4" stroke={viewMode === 'manager' ? '#2563eb' : '#16a34a'} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-text-primary">
            Shared 1:1 Agenda
            <span className="text-text-muted font-normal ml-1.5">with {employeeName}</span>
          </h3>
        </div>
        <button
          onClick={resetAgenda}
          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Agenda items */}
      <ul className="space-y-1 mb-3">
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => setDragIndex(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (dragIndex !== null && dragIndex !== index) {
                moveItem(dragIndex, index);
              }
              setDragIndex(null);
            }}
            className={`flex items-start gap-2 p-2 rounded-md group transition-colors cursor-grab active:cursor-grabbing ${
              dragIndex === index ? 'bg-blue-50 opacity-50' : 'hover:bg-gray-50'
            }`}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => updateItem(item.id, { completed: !item.completed })}
              className="mt-1 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${item.completed ? 'line-through text-text-muted' : 'text-text-primary'}`}>
                {item.text}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <AddedByBadge addedBy={item.addedBy} />
                <CategoryBadge category={item.category} />
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <button
                onClick={() => {
                  if (index > 0) moveItem(index, index - 1);
                }}
                className="w-5 h-5 flex items-center justify-center text-text-muted hover:text-text-primary"
                title="Move up"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M3 5l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => {
                  if (index < items.length - 1) moveItem(index, index + 1);
                }}
                className="w-5 h-5 flex items-center justify-center text-text-muted hover:text-text-primary"
                title="Move down"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="w-5 h-5 flex items-center justify-center text-text-muted hover:text-danger"
                title="Remove"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add new item */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add an agenda item..."
          className="flex-1 text-sm border border-border rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
        <button
          onClick={handleAdd}
          disabled={!newItemText.trim()}
          className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}
