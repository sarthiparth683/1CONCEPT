import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";

// Task List Component
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Access Redux state
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Add Task Component
const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch(); // Dispatch actions

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: "ADD_TASK", payload: task }); // Core Redux Action
      setTask(""); // Clear input field
    }
  };

  return (
    <div>
      <h2>Add a Task</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

// Main App Component
const Redux2 = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Task Manager with Redux</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default Redux2;
