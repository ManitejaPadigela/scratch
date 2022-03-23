import React, { useState, useContext, createContext } from "react";

const AddTasks = () => {
  const [TASK_LIST, addTaskItem] = useState([]);
  const [newTask, setNewTask] = useState("");

  //const taskContext = createContext(TASK_LIST);

  const taskSubmitHandler = (event) => {
    event.preventDefault();
    console.log(newTask);
    addTaskItem((prevItem) => prevItem.concat(newTask));
  };

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  return (
    <form onSubmit={taskSubmitHandler}>
      <input
        type="text"
        name="task"
        value={newTask}
        onChange={inputChangeHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTasks;
