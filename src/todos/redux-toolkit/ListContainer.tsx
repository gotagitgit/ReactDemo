import React from 'react';
import { useSelector } from 'react-redux';
import ItemWrapper from './ItemWrapper';
import { RootState } from './store';
import { Todo } from './models';

function ListContainer() 
{
  const todos: Todo[] = useSelector((state: RootState) => state.todos.items);

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