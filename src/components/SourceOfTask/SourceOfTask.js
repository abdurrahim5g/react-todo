import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Title from "../Title/Title";

ChartJS.register(ArcElement, Tooltip, Legend);

const SourceOfTask = () => {
  const data = {
    labels: ["Learning", "Client", "Todo"],
    datasets: [
      {
        label: "Task",
        data: [6, 9, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="task-source">
      <Title className="mb-5">Source of task</Title>
      <Doughnut data={data} />
    </div>
  );
};

export default SourceOfTask;
