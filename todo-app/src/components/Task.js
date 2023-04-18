import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TaskCheckbox = styled.input`
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ff5e5e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ff3232;
  }
`;

function Task({ task, onToggleCompletion, onDelete }) {
  return (
    <TaskContainer>
      <label>
        <TaskCheckbox
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
        />
        {task.title}
      </label>
      <DeleteButton onClick={() => onDelete(task.id)}>Usuń</DeleteButton>
    </TaskContainer>
  );
}

export default Task;
