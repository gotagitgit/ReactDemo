import React from 'react';

interface InputContainerProps {
  onAddTodo: (text: string) => void;
}

function InputContainer({ onAddTodo }: InputContainerProps)
{
  return (
    <div className="prop-pass">
      <span className="prop-label">onAddTodo ↓</span>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a todo..."
        />
        <button>Add</button>
      </div>
    </div>
  );
}

export default InputContainer;