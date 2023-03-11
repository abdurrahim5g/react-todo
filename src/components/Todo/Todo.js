import React from "react";
import Button from "../Button/Button";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="single-todo hover:bg-slate-50 transition">
      <div className=" border-b py-8 px-8 ">
        <h4 className="todo-title font-semibold text-2xl text-gray-700">
          Lorem ipsum dolor sit amet.
        </h4>
        <p className="my-2 text-gray-700">
          <strong>Time:</strong> 10am to 10pm
        </p>
        <p className="text-gray-700 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae
          dolores id nesciunt expedita, facilis distinctio facere veritatis unde
          fugiat?
        </p>
        <div className="status">
          <Button className="active">Done</Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
