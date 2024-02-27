import React, { useState } from "react";


function NewTaskForm({ categories, onTaskFormSubmit }) {
const [text, setText] = useState("")
const [category, setCategory] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  const newTask = {text,category};
  onTaskFormSubmit(newTask)
  setText("");
  setCategory('');
}

// categories(newTask);


  return (
    <form className="new-task-form" onSubmit={ (e)=>{handleSubmit(e) }}>
      <label>
        Details
        <input onChange={(e)=> setText(e.target.value)}type="text" name="text" />
      </label>
      <label>
        Category
        <select 
        name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          {categories && categories.length > 0 && categories.map((category, index) => (index > 0 && <option key={index} value={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
