import { useEffect } from 'react';
import { useTodoStore } from './stores/todoStore';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

function App() {
  const { darkMode } = useTodoStore();

  // 初始化暗黑模式
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 监听系统主题变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('manual-theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <main className="space-y-6">
          <AddTodo />
          <TodoFilter />
          <TodoList />
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 待办清单 - 让生活更有条理</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
