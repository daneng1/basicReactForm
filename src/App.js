import React, { useState } from "react";
import "./App.css";
import Loader from "./loader";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return setAlert(true);
    const newItem = {
      _id: Math.floor(Math.random() * 100000),
      task: input.toUpperCase(),
      complete: false,
    };
    setTodo([...todo, newItem]);
    setInput("");
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

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
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="App">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              background: {
                color: "#0b032d",
              },
              backgroundMode: {
                enable: true,
              },
              particles: {
                color: {
                  value: ["#f67e7d", "#843b62", "#621940"],
                },
                links: {
                  color: "#ffb997",
                  enable: true,
                },
                move: {
                  enable: true,
                  speed: 3,
                },
                size: {
                  value: 5,
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  animation: {
                    enable: true,
                    speed: 6,
                    minimumValue: 1,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: {
                    enable: true,
                    minimumValue: 0.4,
                  },
                },
              },
            }}
          />
          {alert && (
            <div id="alert">
              <p>Please enter some text</p>
              <button onClick={() => setAlert(false)}>&times;</button>
            </div>
          )}
          <h1 id="header">TO-DO List</h1>
          <form id="input-form" onSubmit={handleSubmit}>
            <input
              id="input"
              title="input-field"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button id="submit-btn" title="input-btn" type="submit">
              Submit
            </button>
          </form>
          <div id="list">
            {todo
              ? todo.map((todo) => (
                  <div key={todo._id}>
                    <div
                      className={
                        todo.complete ? "row_complete" : "row_incomplete"
                      }
                    >
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
              : null}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
