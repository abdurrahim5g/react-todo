import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import Performance from "../Performance/Performance";
import SourceOfTask from "../SourceOfTask/SourceOfTask";

const Dashboard = () => {
  const taskName = [
    { id: 0, title: "Learning Task" },
    { id: 1, title: "My Todo" },
    { id: 2, title: "Client Task" },
  ];
  return (
    <section className="dashboard">
      <div className="card-group grid grid-cols-3 gap-5">
        {taskName?.map((task, index) => (
          <InfoCard key={index} task={task}></InfoCard>
        ))}
      </div>
      <div className="performance grid grid-cols-2 gap-5 mt-8">
        <div className="col-span-1 bg-white rounded-lg shadow-md py-5 px-7">
          <Performance></Performance>
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-md py-5 px-7">
          <div className="source-of-task">
            <SourceOfTask></SourceOfTask>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
