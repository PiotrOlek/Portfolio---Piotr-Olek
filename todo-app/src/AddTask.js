import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Dodaj zadanie"
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default AddTask;
