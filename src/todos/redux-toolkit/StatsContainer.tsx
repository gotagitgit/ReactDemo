import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function StatsContainer() 
{
  const todos = useSelector((state: RootState) => state.todos.items);

  const totalTodos: number = todos.length;
  const completedTodos: number = todos.filter(todo => todo.completed).length;;
  const pendingTodos: number = totalTodos - completedTodos;

  return (
    <div className="redux-container">
      <span className="redux-label">useSelector(todos) ↓</span>
      <div className="todo-stats">
        <p>Total: {totalTodos}</p>
        <p>Completed: {completedTodos}</p>
        <p>Pending: {pendingTodos}</p>
      </div>
    </div>
  );
}

export default StatsContainer;