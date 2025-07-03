import React from 'react';
import InputContainer from './InputContainer';
import StatsContainer from './StatsContainer';
import ListContainer from './ListContainer';
import { Provider } from 'react-redux';
import { store } from './store';

function TodoRedux() {
  return (
    <Provider store={store}>    
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
    </Provider>
  );
}

export default TodoRedux;