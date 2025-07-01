import React from 'react';

function HookCounter() 
{
    return (
        <div className="counter">
        <p>Hello 'Anonymous'!</p>
        <input 
            type="text" 
            placeholder="Enter your name"
        />
        <h3>Count: </h3>
        <div className="buttons">
            <button>-</button>
            <button>Reset</button>
            <button>+</button>
        </div>
        </div>
    );
}

export default HookCounter;