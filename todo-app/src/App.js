import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista zadań</h1>
      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onDelete={deleteTask}
      />
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
