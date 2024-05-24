// src/Task.js
import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(task.id)}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
