import React from "react";
import Button from "../Button/Button";
import "./Todo.css";

const Todo = ({ todoItem }) => {
  const { title, desc, startEndTime, status } = todoItem;
  console.log(todoItem.id);
  return (
    <div
      className={`single-todo hover:bg-slate-50 transition ${
        status && "complete"
      }`}
    >
      <div className=" border-b py-8 px-8 ">
        <h4 className="todo-title font-semibold text-2xl text-gray-700">
          {title}
        </h4>
        <p className="my-2 text-gray-700">
          <strong>Time:</strong> {startEndTime}
        </p>
        <p className="text-gray-700 mb-3">{desc}</p>
        <div className="status">
          <Button className="active">Done</Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
