import React from "react";
import Todo from "../Todo/Todo";
import "./TodoContent.css";
const TodoContent = () => {
  return (
    <section className="todo-content" style={{ background: "#fff" }}>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </section>
  );
};

export default TodoContent;
