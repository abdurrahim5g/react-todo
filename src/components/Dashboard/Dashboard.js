import React from "react";
import InfoCard from "../InfoCard/InfoCard";

const Dashboard = () => {
  const taskName = [
    { id: 0, title: "Learning Task" },
    { id: 1, title: "My Todo" },
    { id: 2, title: "Client Task" },
  ];
  return (
    <section className="dashboard">
      <div className="card-group grid grid-cols-3 gap-5">
        {taskName.map((task, index) => (
          <InfoCard key={index} task={task}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
