import React, { useState } from "react";
import styled from "styled-components";

const AddTaskForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddTaskInput = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddTaskButton = styled.button`
  padding: 5px 10px;
  background-color: #3d9cff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #2286de;
  }
`;

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle("");
    }
  };

  return (
    <AddTaskForm onSubmit={handleSubmit}>
      <AddTaskInput
        type="text"
        placeholder="Nowe zadanie"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <AddTaskButton type="submit">Dodaj</AddTaskButton>
    </AddTaskForm>
  );
}

export default AddTask;
