import React from "react";

// don't miss the {} inside the function

function Task({ task, category, text, deleteThis}) { // make sure to have the 3 argument tasks, category, text (even if you're only using 1 or 2 of the 3)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteThis(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
