import React from "react";

const Title = (props) => {
  return (
    <h4
      className={`todo-title font-semibold text-2xl text-gray-700 ${props.className}`}
    >
      {props.children}
    </h4>
  );
};

export default Title;
