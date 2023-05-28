import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.css";
import Popup from "../../components/Popup/Popup";

const Main = () => {
  // hide popup by clicking "Escape" key
  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      const popup = document.getElementById("popup");
      popup.classList.add("hidden");
      console.log("Popup hide");
    } else {
      return;
    }
  };

  // select #todoTitle input field by clicking `ArrowUp`
  document.onkeyup = (event) => {
    if (event.key === "ArrowUp") {
      const todoTitle = document.getElementById("todoTitle");
      if (todoTitle) {
        todoTitle.focus();
      }
    }
  };

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
              <Popup></Popup>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
