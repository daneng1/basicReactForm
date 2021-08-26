import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    const newItem = {
      _id: Math.floor(Math.random() * 10000), 
      task: input.toUpperCase(),
      complete: false
    }
    e.preventDefault();
    setTodo([...todo, newItem]);
    // console.log(todo);
  }

  const toggleComplete = (e, id) => {
    e.preventDefault();
    todo.filter((item) => {
      if (item._id === id) {
        item.complete = !item.complete;
      }
      // console.log(item.task, item.complete);
      return todo;
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <ul id="form">
      {todo ? todo.map((item) =>
        <li onClick={(e) => toggleComplete(e, item._id)} style={{ textDecorationLine: item.complete ? 'line-through': 'none'}} className='item' key={item._id}>{item.task}</li>
      )
      : null }
      </ul>
    </div>
  );
}

export default App;
