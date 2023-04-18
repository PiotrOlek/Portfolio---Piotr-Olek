import React from "react";
import Task from "./Task";
import styled from "styled-components";

const TaskListContainer = styled.div`
  margin-bottom: 20px;
`;

function TaskList({ tasks, onToggleCompletion, onDelete }) {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onDelete={onDelete}
        />
      ))}
    </TaskListContainer>
  );
}

export default TaskList;
