import React, { useState } from 'react';
import CounterDemo from './counter/CounterDemo';
import './App.css';
import TodosDemo from './todos/TodosDemo';


type TabType = 'counter' | 'redux';

function App()
{
  const [activeTab, setActiveTab] = useState<TabType>('counter');

  return (
    <div className="app">
      <h1>React Training Demos</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'counter' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('counter')}
        >
          Counter
        </button>
        <button 
          className={activeTab === 'redux' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('redux')}
        >
          Todos
        </button>
      </div>
      
      {activeTab === 'counter' && <CounterDemo />}
      {activeTab === 'redux' && <TodosDemo />}
    </div>
  );
}

export default App;