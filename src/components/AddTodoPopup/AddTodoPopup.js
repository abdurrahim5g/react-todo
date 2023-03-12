import React from "react";
import SingleFormItem from "../SingleFormItem/SingleFormItem";
import "./AddTodoPopup.css";
import checklist from "./images/check-list.png";
import { UilCheckSquare } from "@iconscout/react-unicons";
import { getDataFromTodoForm, isTodoPopupShow } from "../../utility/utility";

const AddTodoPopup = () => {
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
              <h4 className="text-2xl font-semibold mb-2">
                Lorem, ipsum dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                temporibus.
              </p>
            </div>
          </div>
        </header>
        <div className="popupTodoForm">
          <SingleFormItem label="Todo Title" id="todoTitle"></SingleFormItem>

          <div className="grid star-end-time grid-cols-2 gap-6 my-7">
            <SingleFormItem
              type="time"
              label="Start Time"
              id="startTime"
            ></SingleFormItem>
            <SingleFormItem
              type="time"
              label="End Time"
              id="endTime"
            ></SingleFormItem>
          </div>

          <SingleFormItem
            type="todoDescription"
            label="Todo Description"
            id="todoDescription"
          ></SingleFormItem>

          <button
            onClick={getDataFromTodoForm}
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
