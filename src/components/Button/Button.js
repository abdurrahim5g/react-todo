import React from "react";
// import { completeTodo } from "../../utility/utility";

const Button = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <button
      onClick={props.onClick}
      className={`todo-status-button mr-2 bg-blue-500 rounded-3xl py-2 px-5 text-white  font-semibold hover:bg-blue-400 ${classes}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
