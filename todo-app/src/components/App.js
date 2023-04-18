import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

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
    <Container>
      <Title>Lista zadań</Title>
      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onDelete={deleteTask}
      />
      <AddTask onAdd={addTask} />
    </Container>
  );
}

export default App;
