import React from 'react';

function StatsContainer() {
  
  const totalTodos: number = 0;
  const completedTodos: number = 0;
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