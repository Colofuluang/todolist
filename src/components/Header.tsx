import React from 'react';
import { Moon, Sun, CheckSquare } from 'lucide-react';
import { useTodoStore } from '../stores/todoStore';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTodoStore();

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <CheckSquare className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            待办清单
          </h1>
          <p className="text-sm text-muted-foreground">
            高效管理您的日常任务
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
        className="transition-colors"
        aria-label={darkMode ? '切换到明亮模式' : '切换到暗黑模式'}
      >
        {darkMode ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </Button>
    </header>
  );
};