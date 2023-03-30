import React from "react";
import Title from "../Title/Title";
import { UilChartLine } from "@iconscout/react-unicons";
import "./InfoCard.css";
import { completedTask, totalTask } from "../../utility/utility";
import { Link } from "react-router-dom";

const InfoCard = ({ task }) => {
  const { id, title } = task;
  const key = localStorage.key(id);

  const total = totalTask(key);
  const complete = completedTask(key);

  const progressNumber = (100 / total) * complete;
  const progress = `${progressNumber ? progressNumber : 0}%`;
  console.log(progress);

  return (
    <div className="info-card">
      <div className="info">
        <div className="task-status">
          <span className="complete-task">{complete}</span>
          <span className="total-task">{total}</span>
        </div>
        <Title className="text-white mt-3">
          <Link to={key}>
            {title} <span className="show-progress">{progress}</span>
          </Link>
        </Title>
        <p></p>
      </div>
      <div className="icon">
        <UilChartLine></UilChartLine>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: progress }}></div>
      </div>
    </div>
  );
};

export default InfoCard;
