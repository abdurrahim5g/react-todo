import React from "react";
import { NavLink } from "react-router-dom";
import {
  UilHome,
  UilFileCheckAlt,
  UilGraduationCap,
  UilUserArrows,
  UilPlus,
} from "@iconscout/react-unicons";
import "./Navbar.css";
import { isPopupShow } from "../../utility/utility";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilHome className="float-left mr-4"></UilHome> Home
            <span>
              <UilPlus onClick={() => isPopupShow(true)}></UilPlus>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learning"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilGraduationCap className="float-left mr-4"></UilGraduationCap>{" "}
            Learning
            <span>
              <UilPlus onClick={() => isPopupShow(true)}></UilPlus>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilFileCheckAlt className="float-left mr-4"></UilFileCheckAlt> Todo
            <span>
              <UilPlus onClick={() => isPopupShow(true)}></UilPlus>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients-todo"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilUserArrows className="float-left mr-4"></UilUserArrows> Client
            Todo
            <span>
              <UilPlus onClick={() => isPopupShow(true)}></UilPlus>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
