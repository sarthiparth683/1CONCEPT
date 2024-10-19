import React, { useState } from "react";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo2 = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // to check if the input field is empty or not
    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // todo hanleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  // todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) { 
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
  };

  return (
    <div className="bodi">
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnorderedList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
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

export default Todo2;
