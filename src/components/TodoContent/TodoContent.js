import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoContent.css";
import AddTodo from "../AddTodo/AddTodo";
import Popup from "../Popup/Popup";
import Title from "../Title/Title";

const TodoContent = ({ todoKey }) => {
  const [todo, setTodo] = useState([]);

  const noTodoMessage = todo?.length === 0 && (
    <Title className="text-center my-12">You don't have any task today</Title>
  );
  // console.log(props);

  useEffect(() => {
    const todoArray = JSON.parse(localStorage.getItem(todoKey));
    if (todoArray?.length > 0) {
      setTodo(todoArray);
    } else {
      setTodo([]);
    }
  }, [todoKey]);

  return (
    <section className="todo-content" style={{ background: "#fff" }}>
      {todo?.map((todoItem) => (
        <Todo key={todoItem.id} todoItem={todoItem} setTodo={setTodo}></Todo>
      ))}
      {noTodoMessage}
      <Popup>
        <AddTodo setTodo={setTodo}></AddTodo>
      </Popup>
    </section>
  );
};

export default TodoContent;
