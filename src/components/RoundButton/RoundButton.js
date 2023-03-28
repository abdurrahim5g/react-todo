import React from "react";
import { UilCheckSquare } from "@iconscout/react-unicons";

const RoundButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      id={props.id}
      className={`w-3/4 mx-auto flex bg-blue-500 py-3 px-10 rounded mt-6  text-white font-semibold items-center justify-center transition hover:bg-blue-400 ${props.className}`}
    >
      <UilCheckSquare className="mr-4"></UilCheckSquare> {props.children}
    </button>
  );
};

export default RoundButton;
