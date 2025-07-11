import { create } from 'zustand';
import { type Todo, type FilterType, type PriorityType } from '../types';
import { storage, generateId } from '../lib/utils';

interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  darkMode: boolean;
  
  // Actions
  addTodo: (text: string, priority?: PriorityType, dueDate?: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  setFilter: (filter: FilterType) => void;
  toggleDarkMode: () => void;
  clearCompleted: () => void;
  
  // Computed
  filteredTodos: () => Todo[];
  completedCount: () => number;
  activeCount: () => number;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: storage.getTodos(),
  filter: 'all',
  darkMode: typeof window !== 'undefined' ? 
    (() => {
      const manualTheme = localStorage.getItem('manual-theme');
      if (manualTheme) {
        return manualTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    })() : false,
  
  addTodo: (text: string, priority: PriorityType = 'medium', dueDate?: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      priority,
      dueDate,
      createdAt: new Date().toISOString()
    };
    
    set((state) => {
      const newTodos = [newTodo, ...state.todos];
      storage.saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
  
  toggleTodo: (id: string) => {
    set((state) => {
      const newTodos = state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      storage.saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
  
  deleteTodo: (id: string) => {
    set((state) => {
      const newTodos = state.todos.filter(todo => todo.id !== id);
      storage.saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
  
  updateTodo: (id: string, updates: Partial<Todo>) => {
    set((state) => {
      const newTodos = state.todos.map(todo =>
        todo.id === id ? { ...todo, ...updates } : todo
      );
      storage.saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
  
  setFilter: (filter: FilterType) => {
    set({ filter });
  },
  
  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', newDarkMode);
        localStorage.setItem('manual-theme', newDarkMode ? 'dark' : 'light');
      }
      return { darkMode: newDarkMode };
    });
  },
  
  clearCompleted: () => {
    set((state) => {
      const newTodos = state.todos.filter(todo => !todo.completed);
      storage.saveTodos(newTodos);
      return { todos: newTodos };
    });
  },
  
  filteredTodos: () => {
    const { todos, filter } = get();
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  },
  
  completedCount: () => {
    return get().todos.filter(todo => todo.completed).length;
  },
  
  activeCount: () => {
    return get().todos.filter(todo => !todo.completed).length;
  }
}));