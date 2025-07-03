import React from 'react';
import TodoPropDrilling from "./prop-drilling/TodoPropDrilling";
import TodoRedux from './redux/TodoRedux';
import TodoReduxToolkit from './redux-toolkit/TodoReduxToolkit';

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

      <div className="demo-section">
        <h2>Using Slice from Redux Toolkit</h2>
        <TodoReduxToolkit />
      </div>
    </>
  );
}

export default TodosDemo;