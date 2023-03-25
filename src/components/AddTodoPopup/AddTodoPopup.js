import React from "react";
import SingleFormItem from "../SingleFormItem/SingleFormItem";
import "./AddTodoPopup.css";
import checklist from "./images/check-list.png";
import { UilCheckSquare } from "@iconscout/react-unicons";
import {
  getDataFromTodoForm,
  getKeyFromURL,
  isTodoPopupShow,
} from "../../utility/utility";

const AddTodoPopup = ({ setTodo }) => {
  return (
    <section className="add-todo-popup hidden" id="addTodoPopup">
      <div
        id="backdrop"
        className="backdrop"
        onClick={() => isTodoPopupShow(false)}
      ></div>
      <div id="" className="popup-form-containe">
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

          <button
            onClick={() => {
              getDataFromTodoForm();
              setTodo(JSON.parse(localStorage.getItem(getKeyFromURL())));
            }}
            id="todoFormSubmit"
            className="w-3/4 mx-auto flex bg-blue-500 py-3 px-10 rounded mt-6  text-white font-semibold items-center justify-center transition hover:bg-blue-400"
          >
            <UilCheckSquare className="mr-4"></UilCheckSquare> Add toto
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddTodoPopup;
