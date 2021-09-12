import React, { useState } from "react";
import "./App.css";
import Loader from './loader';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      _id: Math.floor(Math.random() * 100000),
      task: input.toUpperCase(),
      complete: false,
    };
    setTodo([...todo, newItem]);
  };

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  const toggleComplete = (id) => {
    // set new variable and look through Todo's. When an id matches the id sent to the function, change complete to the opposite of whatever it is. Then set state of Todo's to new variable
    let newTodo = todo.map((item) => {
      if (item._id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodo(newTodo);
  };

  const deleteTodo = (id) => {
    // Filter out anything with an id that matches the id sent to the function.
    setTodo(todo.filter((listItem) => listItem._id !== id));
  };

  return (
    <>
    {isLoading ? 
      <div>
        <Loader/>
      </div>
      :
    <div className="App">
      <h1>TO-DO List</h1>
      <form id="input-form" onSubmit={handleSubmit}>
        <input
          title="input-field"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button title="input-btn" type="submit">
          Submit
        </button>
      </form>
      <div id="list">
        {todo
          ? todo.map((todo) => (
            <div>
              <div className="row">
                <p
                  title={todo.task}
                  onClick={() => toggleComplete(todo._id)}
                  className={
                    todo.complete ? "todo_complete" : "todo_incomplete"
                  }
                >
                  {todo.task}
                </p>
                <button
                  title={`delete-${todo.task}`}
                  onClick={() => deleteTodo(todo._id)}
                  className="btn-delete"
                >
                  X
                </button>
              </div>

            </div>
            ))
          : null
          }
      </div>
    </div>
    }
    </>
  );
}

export default App;
