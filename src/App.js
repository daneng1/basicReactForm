import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      _id: todo.length,
      task: input.toUpperCase(),
      complete: false
    }
    setTodo([...todo, newItem]);
  }

  const toggleComplete = (id) => {
    let newTodo = todo.map((item) => {
      if (item._id === id) {
        return {...item, complete: !item.complete};
      }
      return item;
    })
    setTodo(newTodo);
  }

  const deleteTodo = (id) => {
    let newTodo = todo.map((item) => {
      if (item._id === id) {
        return todo.slice(item);
      }
      return item;
    })
    setTodo(newTodo);
    console.log(todo);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <tbody id="form">
      {todo ? todo.map((todo) =>
        <tr>
        <td onClick={() => toggleComplete(todo._id)} className={todo.complete ? "todo_complete" : "todo_incomplete"} key={todo._id}>{todo.task}</td>
        <td onClick={() => deleteTodo(todo._id)}>X</td>
        </tr>
      )
      : null }
      </tbody>
    </div>
  );
}

export default App;
