import React from 'react';
import TodoPropDrilling from "./prop-drilling/TodoPropDrilling";
import TodoRedux from './redux/TodoRedux';

function TodosDemo()
{
  return (
    <>
      <div className="demo-section">
        <h2>Prop Drilling - Multi-Component</h2>
        <TodoPropDrilling />
      </div>

      <div className="demo-section">
        <h2>Redux Solution</h2>
        <TodoRedux />
      </div>
    </>
  );
}

export default TodosDemo;