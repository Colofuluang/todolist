import React from 'react';
import { Circle } from 'lucide-react';
import { useTodoStore } from '../stores/todoStore';
import { TodoItem } from './TodoItem';
import { Card, CardContent } from './ui/Card';

export const TodoList: React.FC = () => {
  const { filteredTodos } = useTodoStore();
  const todos = filteredTodos();

  if (todos.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Circle className="w-12 h-12" />
            <div>
              <p className="text-lg font-medium">暂无待办事项</p>
              <p className="text-sm">添加一个新的任务开始吧！</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // 按优先级和截止日期排序
  const sortedTodos = [...todos].sort((a, b) => {
    // 首先按完成状态排序（未完成的在前）
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // 然后按优先级排序
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) {
      return priorityDiff;
    }
    
    // 最后按截止日期排序（有截止日期的在前，过期的最前）
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    
    // 最后按创建时间排序（新的在前）
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="space-y-3">
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};