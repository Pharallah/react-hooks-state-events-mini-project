import React, { useState } from "react";
import Task from "./Task";

function TaskList({ 
  tasks, 
  selected,
  taskList,
  setTaskList
 }) {

  // console.log(taskList)

  // Filters Category via State variable "selected"
  const filteredDisplay = taskList.filter(task => {
    if (selected === "All") return true
    return task.category === selected
    })

  // Displays the Tasks
  const displayTasks = filteredDisplay.map(task => {
    return <Task key={task.text} taskId={task.text} category={task.category} text={task.text} deleteTask={deleteTask}/>
  })

  
  // Deletes the Tasks
  function deleteTask(id) {
    const filteredTasks = taskList.filter(task => task.text !== id)
    setTaskList(filteredTasks)
  }
  
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
