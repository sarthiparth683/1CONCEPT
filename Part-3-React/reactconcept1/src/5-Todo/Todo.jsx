import "./todo.css";
import { useEffect, useState } from "react";

const Todo3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };
  // todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // todo hanleDeleteTodo function
  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  // todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <div className="bodi">
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2 className="date-time">{dateTime}</h2>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnorderedList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <li key={index} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">Check</button>
                  <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearTodoData}>
            Clear All
          </button>
        </section>
      </section>
    </div>
  );
};

export default Todo3;
