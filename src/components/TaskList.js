import React, { useState } from "react";
import Task from "./Task";


function TaskList({ selected, tasks, setTasks }) {
  

  function handleDelete(task) {
    const filteredItems = tasks.filter( element => element.text !== task)
    console.log(filteredItems)
    setTasks(filteredItems)
  }

    const filteredElements = tasks.filter( element => element.category === selected || selected === "All")
   
  
  
  return (
    <div className="tasks">
      {filteredElements.map((task, index) => (
      <Task 
      handleDelete={handleDelete}
      key={index}
      task={task.text}
      category={task.category}/>)

      
      
      )}
    </div>
  );
}

export default TaskList;
