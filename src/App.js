import React, { useState } from "react";
import "./App.css";
import Loader from "./loader";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
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
        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffff00",
            animation: {
              enable: true,
              speed: -70,
              sync: true
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0,
              sync: false
            }
          },
          size: {
            value: 8,
            random: { enable: true, minimumValue: 4 },
            animation: {
              enable: false,
              speed: 20,
              minimumValue: 4,
              sync: false
            }
          },
          life: {
            duration: {
              value: 2
            },
            count: 1
          },
          move: {
            angle: {
              value: 45,
              offset: 0
            },
            enable: true,
            gravity: {
              enable: true,
              acceleration: -0.5
            },
            speed: 10,
            direction: "top",
            random: false,
            straight: false,
            size: true,
            outModes: {
              default: "destroy",
              bottom: "none"
            },
            attract: {
              enable: false,
              distance: 300,
              rotate: {
                x: 600,
                y: 1200
              }
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        detectRetina: true,
        background: {
          color: "#000000"
        },
        emitters: {
          direction: "top",
          rate: {
            quantity: 50,
            delay: 0.01
          },
          size: {
            width: 100,
            height: 10
          },
          position: {
            x: 50,
            y: 100
          }
        }
      }}
    />          
    {alert && 
            <div id="alert">
              <p>Please enter some text</p>
              <button onClick={() => setAlert(false)}>&times;</button>
            </div>
          }
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
                    <div className={
                          todo.complete ? "row_complete" : "row_incomplete"
                        }>
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
