import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoContent.css";

const TodoContent = () => {
  const [todo, setTodo] = useState([]);
  const noTodoMessage = !todo && (
    <h2 className="no-todo text-center text-2xl font-semibold mt-12">
      You don't have any task today
    </h2>
  );

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  console.log(todo);
  return (
    <section className="todo-content" style={{ background: "#fff" }}>
      {todo?.map((todoItem) => (
        <Todo key={todo.id} todoItem={todoItem}></Todo>
      ))}
      {noTodoMessage}
    </section>
  );
};

export default TodoContent;
