import React from 'react';
import { Todo } from './models';
import { useDispatch } from 'react-redux';

interface ItemWrapperProps {
  todo: Todo;
}

function ItemWrapper({ todo }: ItemWrapperProps) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({type: 'TOGGLE_TODO', payload: todo.id})}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch({type: 'DELETE_TODO', payload: todo.id})}>Delete</button>
    </div>
  );
}

export default ItemWrapper;