// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Navbar from './Navbar'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [mode,setMode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#9e9ed6';
    }
  }
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      {/* <h1>Task Manager</h1> */}
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
