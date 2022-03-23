import React, { useState } from "react";

import Card from "./components/Card";

const DUMMY_TASKS = ["Hello", "good_bye"];

const Scratch = () => {
  const [firstTask, setFirstTask] = useState("");

  const taskGenerateHandler = () => {
    setFirstTask(DUMMY_TASKS[Math.floor(Math.random() * DUMMY_TASKS.length)]);
  };

  return <Card title={firstTask} generateTask={taskGenerateHandler} />;
};

export default Scratch;
