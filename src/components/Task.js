import { useState } from "react";


function Task({ task, category, handleDelete }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick={ ()=>{handleDelete(task)} } className="delete">X</button>
    </div>
  );
}

export default Task;
