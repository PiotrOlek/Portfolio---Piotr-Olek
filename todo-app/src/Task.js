import React from "react";

function Task({ task, onToggleCompletion, onDelete }) {
  const toggleCompletion = () => {
    onToggleCompletion(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompletion}
      />
      <span>{task.title}</span>
      <button onClick={handleDelete}>Usuń</button>
    </div>
  );
}

export default Task;
