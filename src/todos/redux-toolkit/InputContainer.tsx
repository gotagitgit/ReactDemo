import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './todoSlice';

function InputContainer() {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();

   const handleAdd = () =>
  {
    if (inputValue.trim())
    {
      dispatch(addToDo(inputValue))
      setInputValue('');
    }
  }

  return (
    <div className="redux-container">
      <span className="redux-label">dispatch(ADD_TODO) ↑</span>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a todo..."
          value={inputValue}
          onChange={x => setInputValue(x.target.value)}  
          onKeyDown={x => x.key === 'Enter' && handleAdd()}    
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default InputContainer;