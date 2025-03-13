import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchTasks, addTask } from '../redux/action';

const TaskManager = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const { tasks, loading, error } = useSelector(state => state.task, shallowEqual);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ title: newTask, id: tasks.length + 1 }));
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Task Manager (Redux Thunk Demo)</h2>

      {loading && <p>Loading Tasks...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskManager;