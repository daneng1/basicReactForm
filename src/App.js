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
    console.log(todo);
  }

  const toggleComplete = (e, id) => {
    e.preventDefault();
    console.log(id);
    todo.filter((item) => {
      if (item._id === id) {
        console.log(todo, 'made it to filter');
        setTodo([...todo, {...item, complete: !item.complete}])
      }
      // need to sort out how to update state when clicking on an item
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
        <li onClick={(e) => toggleComplete(e, item._id)} style={{ textDecoration: 'none'}} className='item' key={item._id}>{item.task}</li>
      )
      : null }
      </ul>
    </div>
  );
}

export default App;
