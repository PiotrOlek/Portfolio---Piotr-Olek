import React from "react";
import Task from "./Task";

function TaskList({ tasks, onToggleCompletion, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
