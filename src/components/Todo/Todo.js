import React from "react";
import { completeTodo, isPopupShow } from "../../utility/utility";
import Button from "../Button/Button";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import Popup from "../Popup/Popup";
import Title from "../Title/Title";
// import completeImg from "./check.png";
import "./Todo.css";

const Todo = ({ todoItem, setTodo }) => {
  const { id, title, desc, startEndTime, status } = todoItem;
  const newDescription = desc.split("\n");
  const popupId = `id-${id}`;
  console.log(popupId);

  return (
    <div
      className={`single-todo hover:bg-slate-50 transition ${
        status && "complete"
      }`}
    >
      <div className="todo-content border-b py-8 px-8">
        {status === 1 && <span className="done">✔ Done</span>}
        <Title>{title}</Title>

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
        <div className="status controller-button">
          <Button
            className="bg-red-500	hover:bg-red-400"
            onClick={() => isPopupShow(true, popupId)}
          >
            Delete
          </Button>

          {!status && (
            <>
              <Button
                className="bg-amber-400	hover:bg-amber-300"
                onClick={() => completeTodo(id, setTodo)}
              >
                Edit
              </Button>
              <Button className="" onClick={() => completeTodo(id, setTodo)}>
                Done
              </Button>
            </>
          )}
        </div>
      </div>
      <Popup id={popupId}>
        <DeleteTodo
          popupId={popupId}
          todoId={id}
          setTodo={setTodo}
        ></DeleteTodo>
      </Popup>
    </div>
  );
};

export default Todo;
