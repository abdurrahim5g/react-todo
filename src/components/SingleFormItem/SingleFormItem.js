import React from "react";

const SingleFormItem = ({ label, type, id }) => {
  const currentType = type ? type : "text";
  return (
    <div className="single-form-item">
      <label htmlFor={id} className="font-semibold block mb-1">
        {label}
      </label>
      {currentType !== "todoDescription" && (
        <input
          type={currentType}
          id={id}
          className="border border-gray-400 outline-none py-2 px-6 rounded w-full"
        />
      )}
      {currentType === "todoDescription" && (
        <textarea
          name=""
          className="border border-gray-400 outline-none py-2 px-6 rounded w-full resize-none"
          id={id}
          cols="30"
          rows="4"
        ></textarea>
      )}
    </div>
  );
};

export default SingleFormItem;
