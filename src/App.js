import React from "react";
import "./App.css";
import Scratch from "./scratch-card/Scratch";
import AddTasks from "./shared/form-elements/AddTasks";

function App() {
  return (
    <React.Fragment>
      <Scratch />
      <AddTasks />
      <h1>Hello</h1>
    </React.Fragment>
  );
}

export default App;
