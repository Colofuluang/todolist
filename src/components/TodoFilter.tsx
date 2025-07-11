import React from 'react';
import { type FilterType } from '../types';
import { useTodoStore } from '../stores/todoStore';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const filterLabels: Record<FilterType, string> = {
  all: '全部',
  active: '未完成',
  completed: '已完成'
};

export const TodoFilter: React.FC = () => {
  const { filter, setFilter, activeCount, completedCount, clearCompleted } = useTodoStore();
  const totalCount = activeCount() + completedCount();

  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          共 {totalCount} 项任务
        </span>
        {activeCount() > 0 && (
          <span className="text-sm text-muted-foreground">
            · {activeCount()} 项未完成
          </span>
        )}
        {completedCount() > 0 && (
          <span className="text-sm text-muted-foreground">
            · {completedCount()} 项已完成
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 p-1 bg-muted rounded-md">
          {filters.map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter(filterType)}
              className={cn(
                'text-xs px-3 py-1 h-7',
                filter === filterType && 'shadow-sm'
              )}
            >
              {filterLabels[filterType]}
            </Button>
          ))}
        </div>

        {completedCount() > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearCompleted}
            className="text-xs px-3 py-1 h-7 text-muted-foreground hover:text-destructive"
          >
            清除已完成
          </Button>
        )}
      </div>
    </div>
  );
};