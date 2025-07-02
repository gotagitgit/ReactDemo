import React from 'react';
import TodoPropDrilling from "./prop-drilling/TodoPropDrilling";

function TodosDemo()
{
  return (
     <div className="demo-section">
        <h2>Prop Drilling - Multi-Component</h2>
        <TodoPropDrilling />
      </div>
  );
}

export default TodosDemo;