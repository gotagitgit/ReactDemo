import React, { useState } from 'react';

function InputContainer() {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="redux-container">
      <span className="redux-label">dispatch(ADD_TODO) ↑</span>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a todo..."
          value={inputValue}
          onChange={x => setInputValue(x.target.value)}      
        />
        <button>Add</button>
      </div>
    </div>
  );
}

export default InputContainer;