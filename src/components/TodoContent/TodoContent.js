import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoContent.css";
import AddTodoPopup from "../AddTodoPopup/AddTodoPopup";

const TodoContent = ({ todoKey }) => {
  const [todo, setTodo] = useState([]);

  const noTodoMessage = !todo && (
    <h2 className="no-todo text-center text-2xl font-semibold mt-12">
      You don't have any task today
    </h2>
  );
  // console.log(props);

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem(todoKey)));
  }, [todoKey]);

  return (
    <section className="todo-content" style={{ background: "#fff" }}>
      {todo?.map((todoItem) => (
        <Todo key={todoItem.id} todoItem={todoItem} setTodo={setTodo}></Todo>
      ))}
      {noTodoMessage}
      <AddTodoPopup setTodo={setTodo}></AddTodoPopup>
    </section>
  );
};

export default TodoContent;
