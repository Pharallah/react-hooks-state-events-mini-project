import React from "react";

function CategoryFilter({ categories, selected, setSelected }) {
  
  // Displays Category <button> & Triggers Category Setter Function via Click
  const displayButtons = categories.map(category => {
    return <button 
    key={category}
    id={category}
    className={selected === category ? "selected" : ""} 
    onClick={(e) => setSelected(e.target.id)}
    >
      {category}
    </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayButtons}
    </div>
  );
}

export default CategoryFilter;
