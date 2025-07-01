import React, { ChangeEvent, useEffect, useState } from 'react';
import { IClassCounterState } from './IClassCounterState';

function HookCounter() 
{
    const [state, setState] = useState<IClassCounterState>(
        {
            count: 0,
            name: ''
        }
    );

    const increment = () => setState(prev => ({...prev, count: prev.count + 1}));
    const decrement = () => setState(prev => ({...prev, count: prev.count - 1}));
    const reset = () => setState(prev => ({...prev, count: 0}));

    useEffect(() => {
        document.title = `Count: ${state.count}`;
    }, [state]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => 
        setState(prev => ({...prev, name: e.target.value}));

    return (
        <div className="counter">
        <p>Hello {state.name || 'Anonymous'}!</p>
        <input 
            type="text" 
            placeholder="Enter your name"
            value={state.name}
            onChange={handleNameChange}
        />
        <h3>Count: {state.count}</h3>
        <div className="buttons">
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
        </div>
    );
}

export default HookCounter;