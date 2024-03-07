import React from "react";
import Task from "./Task";

// don't miss the {} inside the function

function TaskList({ tasks, category, text, deleteThis }) { // make sure to have the 3 argument tasks, category, text (even if you're only using 1 or 2 of the 3)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => (
        <Task key={task.text} task={task} category={task.category} text={task.text} deleteThis={deleteThis}></Task>
      ))}
    </div>
  );
}

export default TaskList;