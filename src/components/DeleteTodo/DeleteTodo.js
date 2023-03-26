import React from "react";
import { deleteTodo, isPopupShow } from "../../utility/utility";
import Button from "../Button/Button";
import Title from "../Title/Title";
import "./DeleteTodo.css";

const DeleteTodo = ({ popupId, todoId, setTodo }) => {
  return (
    <div className="delete-todo">
      <Title className="text-xl">
        Are you sure you want to delete this todo?
      </Title>
      <p className="mt-6 mb-10 text-gray-600">
        Please make sure! You don't need this data any more. Because, You can't
        undo this data after you delete it.
      </p>
      <div className="buttons text-right">
        <Button onClick={() => isPopupShow(false, popupId)}>Close</Button>
        <Button
          className="bg-red-500 hover:bg-red-400"
          onClick={() => deleteTodo(todoId, setTodo)}
        >
          Yes! Delete it
        </Button>
      </div>
    </div>
  );
};

export default DeleteTodo;
