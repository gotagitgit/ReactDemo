import React, { useState } from 'react';

interface InputContainerProps {
  onAddTodo: (text: string) => void;
}

function InputContainer({ onAddTodo }: InputContainerProps)
{
  const [inputValue, setInputValue] = useState<string>('')

  const handleAdd = () =>
  {
    if (inputValue.trim())
    {
      onAddTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className="prop-pass">
      <span className="prop-label">onAddTodo ↓</span>
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