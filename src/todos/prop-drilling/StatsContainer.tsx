import React from 'react';
import { Todo } from './models';

interface StatsContainerProps {
  todos: Todo[];
}

function StatsContainer({ todos }: StatsContainerProps)
{
  const totalTodos: number = todos.length;
  const completedTodos: number = todos.filter(todo => todo.completed).length;
  const pendingTodos: number = totalTodos - completedTodos;

  return (
    <div className="prop-pass">
      <span className="prop-label">todos ↓</span>
      <div className="todo-stats">
        <p>Total: {totalTodos}</p>
        <p>Completed: {completedTodos}</p>
        <p>Pending: {pendingTodos}</p>
      </div>
    </div>
  );
}

export default StatsContainer;