import React from "react";
import SingleFormItem from "../SingleFormItem/SingleFormItem";
import "./AddTodo.css";
import checklist from "./images/check-list.png";

import {
  updateTodo,
  getDataFromTodoForm,
  getKeyFromURL,
} from "../../utility/utility";
import RoundButton from "../RoundButton/RoundButton";

const AddTodo = ({ setTodo, idEdit = false }) => {
  return (
    <div className="todo-form">
      <header className="popup-header">
        <div className="grid grid-cols-4 pb-6 mb-6 border-b border-gray-400 ">
          <div className="img">
            <img src={checklist} alt="Todo checklist" className="pr-5" />
          </div>
          <div className="text col-span-3">
            <h4 className="text-2xl font-semibold mb-2">Add your todo ✔</h4>
            <p>Give a short description for knowing your todo instant ✅</p>
          </div>
        </div>
      </header>
      <div className="popupTodoForm">
        <SingleFormItem
          label="Todo Title"
          id="todoTitle"
          placeholder="Enter your title"
        ></SingleFormItem>

        <SingleFormItem
          type="text"
          label="Start & End Time"
          id="startEndTime"
          className="my-5"
          placeholder="10am to 12pm"
        ></SingleFormItem>

        <SingleFormItem
          type="todoDescription"
          label="Todo Description"
          id="todoDescription"
          placeholder="Short description about your todo 📝"
        ></SingleFormItem>

        <RoundButton
          id="todoFormSubmit"
          onClick={() => {
            getDataFromTodoForm();
            setTodo(JSON.parse(localStorage.getItem(getKeyFromURL())));
          }}
        >
          Add Todo
        </RoundButton>

        <RoundButton
          id="updateTodo"
          className="hidden"
          onClick={() => {
            updateTodo(setTodo);
          }}
        >
          Update Todo
        </RoundButton>
      </div>
    </div>
  );
};

export default AddTodo;
