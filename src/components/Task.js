import React, { useState } from "react";

function Task({ taskId, category, text, deleteTask }) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      className="delete" 
      onClick={() => deleteTask(taskId)}
      >X
      </button>
    </div>
  );
}

export default Task;
