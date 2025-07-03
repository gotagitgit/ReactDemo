import React from 'react';
import { Todo } from './models';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todoSlice';

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
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default ItemWrapper;