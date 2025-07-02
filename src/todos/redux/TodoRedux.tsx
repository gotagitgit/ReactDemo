import React from 'react';
import InputContainer from './InputContainer';
import StatsContainer from './StatsContainer';
import ListContainer from './ListContainer';

function TodoRedux() {
  return (
      <div className="todo-app">
        <div className="multi-component-demo">
          <div className="component-box redux">
            <h4>InputContainer (dispatch actions)</h4>
            <InputContainer />
          </div>
          
          <div className="component-box redux">
            <h4>StatsContainer (useSelector)</h4>
            <StatsContainer />
          </div>
          
          <div className="component-box redux">
            <h4>ListContainer (useSelector + dispatch)</h4>
            <ListContainer />
          </div>
        </div>
      </div>
  );
}

export default TodoRedux;