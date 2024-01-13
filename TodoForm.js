import React, { useState } from "react";

function TaskNotebook() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleTaskInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);

      setTaskText("");
    }
  };
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="hey-test">
      <h1>Task Notebook</h1>
      <form onSubmit={handleTaskSubmit}>
        <input
          className="hey-input"
          type="text"
          placeholder="What's Today's Task?"
          value={taskText}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="hey-result">
        <h2>NOTED</h2>
        <ol className="Todo-clear">
          {tasks.map((task, index) => (
            <li className="hey-index" key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TaskNotebook;
