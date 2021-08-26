import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([{...todo}, {
      key: Math.floor(Math.random() * 10000), 
      task: input.toUpperCase(),
      complete: false}] );
    console.log(todo);
  }

  const toggleComplete = () => {
    
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <ul id="form">
      {todo ? todo.map((item) => 
        <li onClick={() => toggleComplete()} style={{ textDecoration: 'none'}} className='item' key={item.key}>{item.name}</li>
      )
      : null }
      </ul>
    </div>
  );
}

export default App;
