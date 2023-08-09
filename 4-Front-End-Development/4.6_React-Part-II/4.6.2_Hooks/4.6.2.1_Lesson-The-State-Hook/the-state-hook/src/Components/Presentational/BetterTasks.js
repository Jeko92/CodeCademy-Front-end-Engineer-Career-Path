import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TaskList";

export default function BetterTasks() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <section
      style={{
        backgroundColor: "goldenrod",
        paddingBottom: "4rem",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>9/9 Overview Hooks</h1>
      <p>Better Constructed with more readable and understandable syntax</p>
      <h2>Tasks</h2>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </section>
  );
}
