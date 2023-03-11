import React from "react";
import { NavLink } from "react-router-dom";
import {
  UilHome,
  UilFileCheckAlt,
  UilGraduationCap,
  UilUserArrows,
} from "@iconscout/react-unicons";
import "./Navbar.css";

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
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learning"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilGraduationCap className="float-left mr-4"></UilGraduationCap>{" "}
            Learning
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilFileCheckAlt className="float-left mr-4"></UilFileCheckAlt> Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients-todo"
            className="block  text-gray-200 font-semibold py-4 px-10"
          >
            <UilUserArrows className="float-left mr-4"></UilUserArrows> Client
            Todo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
