import React from "react";

const Button = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <button
      className={`todo-status-button bg-blue-500 rounded-3xl py-2 px-5 text-white  font-semibold hover:bg-blue-400 ${classes}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
