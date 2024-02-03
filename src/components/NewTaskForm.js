import React, { useState } from "react";

function NewTaskForm({ 
  categories, 
  onTaskFormSubmit,
 }) {
  
  const [formData, setForm] = useState({
    category: "Code",
    text: ""
  })

  // Displays Categories in the Dropdown Menu
  const displayCategories = categories.map(category => {
    if (category !== "All") {
    return <option key={category}> {category} </option>
    }
  })

  //Handle Change
  function handleChange(e) {
    const key = e.target.name
    setForm({ 
      ...formData, 
      [key]: e.target.value })
  }
  
  //Handle Submit
  function handleSubmit(e) {
    e.preventDefault()
    const newData = {
      category: formData.category,
      text: formData.text
    }
    onTaskFormSubmit(newData)
  }

  return (
    <form 
    className="new-task-form" 
    onSubmit={handleSubmit}
    >
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={formData.text} 
        onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={formData.category} 
        onChange={handleChange}
        >
          { displayCategories }
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
