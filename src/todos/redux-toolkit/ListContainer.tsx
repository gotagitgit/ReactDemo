import React from 'react';
import { useSelector } from 'react-redux';
import { TodoState } from './models';
import ItemWrapper from './ItemWrapper';

function ListContainer() 
{
  const todos = useSelector((state: TodoState) => state.items);

  const itemWrappers = todos.map(todo => (<ItemWrapper key={todo.id} todo={todo}/>))

  return (
    <div className="redux-container">
      <span className="redux-label">useSelector(todos) ↓</span>
      <div className="todo-list">
        {itemWrappers}
      </div>
    </div>
  );
}

export default ListContainer;