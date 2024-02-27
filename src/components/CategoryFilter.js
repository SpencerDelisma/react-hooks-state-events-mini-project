import React, { useState } from "react";

function CategoryFilter({ categories, setSelected }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category}onClick={ ()=> {setSelected(category)}} >{category}</button>)}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
