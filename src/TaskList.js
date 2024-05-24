// src/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
