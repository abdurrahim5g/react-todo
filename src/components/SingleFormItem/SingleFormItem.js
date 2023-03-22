import React from "react";

const SingleFormItem = ({ label, type, id, placeholder, className }) => {
  const currentType = type ? type : "text";
  return (
    <div className={`single-form-item ${className}`}>
      <label htmlFor={id} className="font-medium block mb-1">
        {label}
      </label>
      {currentType !== "todoDescription" && (
        <input
          type={currentType}
          id={id}
          className="border border-gray-400 outline-none py-2 px-4 rounded w-full"
          placeholder={placeholder}
        />
      )}
      {currentType === "todoDescription" && (
        <textarea
          name=""
          className="border border-gray-400 outline-none py-2 px-4 rounded w-full resize-none"
          id={id}
          cols="30"
          rows="4"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};

export default SingleFormItem;
