import React from "react";
import logo from "./checklist.png";
import avartar from "./avatar-img.png";
const Header = () => {
  return (
    <header className="grid grid-cols-5 py-6 px-4 items-center">
      <div className="logo-area">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-12" />
          <span className="ml-4 text-2xl font-bold text-blue-600">
            {" "}
            Abdur's Todos
          </span>
        </div>
      </div>
      <div className="title-area col-span-3">
        <h3 className="text-2xl font-bold text-indigo-600">
          Abdur's todo list
        </h3>
      </div>
      <div className="profile-area">
        <img src={avartar} alt="" className="w-12 ml-auto" />
      </div>
    </header>
  );
};

export default Header;
