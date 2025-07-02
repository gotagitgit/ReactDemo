import React from 'react';
import { Todo } from './models';
import ItemWrapper from './ItemWrapper';

interface ListContainerProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function ListContainer({ todos, onToggle, onDelete }: ListContainerProps) {
  return (
    <div className="prop-pass">
      <span className="prop-label">todos, onToggle, onDelete ↓</span>
      <div className="todo-list">
        {todos.map(todo => (
          <ItemWrapper 
            key={todo.id} 
            todo={todo} 
            onToggle={onToggle} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;