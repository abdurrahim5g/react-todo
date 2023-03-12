import React from "react";
import { Outlet } from "react-router-dom";
import AddTodoPopup from "../../components/AddTodoPopup/AddTodoPopup";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.css";

const Main = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="main-container">
        <div className="grid grid-cols-5">
          <div className="left-sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="todo-content col-span-4">
            <div className="main-outlet">
              <div className="inline-navbar">
                <Navbar></Navbar>
              </div>
              <Outlet></Outlet>
              <AddTodoPopup></AddTodoPopup>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
