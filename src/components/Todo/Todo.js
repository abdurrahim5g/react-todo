import React from "react";
import { completeTodo } from "../../utility/utility";
import Button from "../Button/Button";
// import completeImg from "./check.png";
import "./Todo.css";

const Todo = ({ todoItem, setTodo }) => {
  const { id, title, desc, startEndTime, status } = todoItem;
  const newDescription = desc.split("\n");

  return (
    <div
      className={`single-todo hover:bg-slate-50 transition ${
        status && "complete"
      }`}
    >
      <div className=" border-b py-8 px-8 ">
        {status && <span className="done">✔ Done</span>}
        <h4 className="todo-title font-semibold text-2xl text-gray-700">
          {title}
        </h4>
        <p className="my-2 text-gray-700">
          <strong>Time:</strong> {startEndTime}
        </p>
        <div className="description mb-3">
          {newDescription.map((singleLine, index) => (
            <p className="text-gray-700 " key={index}>
              {singleLine}
            </p>
          ))}
        </div>
        <div className="status">
          <Button
            className="bg-amber-400	hover:bg-amber-300"
            onClick={() => completeTodo(id, setTodo)}
          >
            Edit
          </Button>
          <Button
            className="bg-red-500	hover:bg-red-400"
            onClick={() => completeTodo(id, setTodo)}
          >
            Delete
          </Button>
          {!status && (
            <Button className="" onClick={() => completeTodo(id, setTodo)}>
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
