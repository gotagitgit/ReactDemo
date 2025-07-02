import React from 'react';

function ListContainer() {

  return (
    <div className="redux-container">
      <span className="redux-label">useSelector(todos) ↓</span>
      <div className="todo-list">
      </div>
    </div>
  );
}

export default ListContainer;