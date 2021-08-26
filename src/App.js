import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input.toUpperCase()]);
    console.log(todo);
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <ul id="form">
      {todo ? todo.map((item) => 
        <li onClick={() => changeStyle()} style={{ textDecoration: 'none'}} className='item' key={item}>{item}</li>
      )
      : null }
      </ul>
    </div>
  );
}

export default App;
