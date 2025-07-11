export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
}

export type FilterType = 'all' | 'active' | 'completed';

export type PriorityType = 'low' | 'medium' | 'high';