import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  const onTaskFormSubmit = (newTask) =>{
    {setTasks([...tasks, newTask])}
    // if(selected === newTask.category)
    // setTasks([...tasks, newTask])
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}  categories={CATEGORIES}/>
      <CategoryFilter categories={CATEGORIES} setSelected={setSelected}/>
      <TaskList setTasks={setTasks} selected={selected} tasks={tasks} categories={CATEGORIES}/>
    </div>
  );
}

export default App;
