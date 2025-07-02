import React from 'react';
import { Todo } from './models';

interface ItemWrapperProps {
  todo: Todo;
}

function ItemWrapper({ todo }: ItemWrapperProps) {

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
      />
      <span>{todo.text}</span>
      <button>Delete</button>
    </div>
  );
}

export default ItemWrapper;