import React, { useState } from 'react';
import './App.css';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(index)}>{t.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
