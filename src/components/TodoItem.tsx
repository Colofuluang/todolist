import React, { useState } from 'react';
import { Check, X, Calendar, AlertCircle, Edit2 } from 'lucide-react';
import { type Todo, type PriorityType } from '../types';
import { useTodoStore } from '../stores/todoStore';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { cn, formatDate, isOverdue } from '../lib/utils';

interface TodoItemProps {
  todo: Todo;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

const priorityLabels = {
  low: '低',
  medium: '中',
  high: '高'
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState<PriorityType>(todo.priority);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '');

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, {
        text: editText.trim(),
        priority: editPriority,
        dueDate: editDueDate || undefined
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditPriority(todo.priority);
    setEditDueDate(todo.dueDate || '');
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const overdue = isOverdue(todo.dueDate);

  return (
    <div className={cn(
      'group flex items-center gap-3 p-4 bg-card rounded-lg border transition-all duration-200 hover:shadow-md',
      todo.completed && 'opacity-60',
      overdue && !todo.completed && 'border-destructive/50 bg-destructive/5'
    )}>
      {/* 完成状态复选框 */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={cn(
          'flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-primary border-primary text-primary-foreground'
            : 'border-muted-foreground hover:border-primary'
        )}
        aria-label={todo.completed ? '标记为未完成' : '标记为已完成'}
      >
        {todo.completed && <Check className="w-3 h-3" />}
      </button>

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <div className="space-y-2">
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="text-sm"
              autoFocus
            />
            <div className="flex gap-2">
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value as PriorityType)}
                className="px-2 py-1 text-xs rounded border bg-background"
              >
                <option value="low">低优先级</option>
                <option value="medium">中优先级</option>
                <option value="high">高优先级</option>
              </select>
              <Input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className="text-xs flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSave}>
                保存
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>
                取消
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={cn(
                'text-sm',
                todo.completed && 'line-through text-muted-foreground'
              )}>
                {todo.text}
              </span>
              <span className={cn(
                'px-2 py-0.5 text-xs rounded-full font-medium',
                priorityColors[todo.priority]
              )}>
                {priorityLabels[todo.priority]}
              </span>
            </div>
            
            {todo.dueDate && (
              <div className={cn(
                'flex items-center gap-1 text-xs',
                overdue && !todo.completed ? 'text-destructive' : 'text-muted-foreground'
              )}>
                {overdue && !todo.completed ? (
                  <AlertCircle className="w-3 h-3" />
                ) : (
                  <Calendar className="w-3 h-3" />
                )}
                <span>
                  {overdue && !todo.completed ? '已过期: ' : '截止: '}
                  {formatDate(todo.dueDate)}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isEditing && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="h-8 w-8"
            aria-label="编辑任务"
          >
            <Edit2 className="w-3 h-3" />
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => deleteTodo(todo.id)}
          className="h-8 w-8 text-destructive hover:text-destructive"
          aria-label="删除任务"
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};