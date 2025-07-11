import React, { useState } from 'react';
import { Plus, Calendar, Flag } from 'lucide-react';
import { type PriorityType } from '../types';
import { useTodoStore } from '../stores/todoStore';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardContent } from './ui/Card';
import { cn } from '../lib/utils';

export const AddTodo: React.FC = () => {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<PriorityType>('medium');
  const [dueDate, setDueDate] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim(), priority, dueDate || undefined);
      setText('');
      setDueDate('');
      setPriority('medium');
      setShowAdvanced(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const priorityOptions = [
    { value: 'low', label: '低优先级', color: 'text-green-600' },
    { value: 'medium', label: '中优先级', color: 'text-yellow-600' },
    { value: 'high', label: '高优先级', color: 'text-red-600' }
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="添加新的待办事项..."
              className="flex-1"
              autoFocus
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={cn(
                'transition-colors',
                showAdvanced && 'bg-accent'
              )}
              aria-label="显示高级选项"
            >
              <Flag className="w-4 h-4" />
            </Button>
            <Button type="submit" disabled={!text.trim()}>
              <Plus className="w-4 h-4 mr-1" />
              添加
            </Button>
          </div>

          {showAdvanced && (
            <div className="flex gap-2 pt-2 border-t">
              <div className="flex-1">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  优先级
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as PriorityType)}
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {priorityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  截止日期
                </label>
                <div className="relative">
                  <Input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};