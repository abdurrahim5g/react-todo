import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import Performance from "../Performance/Performance";
import SourceOfTask from "../SourceOfTask/SourceOfTask";
import addNotification, { Notifications } from "react-push-notification";

const Dashboard = () => {
  const pushNotifi = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
  };

  const taskName = [
    { id: 0, title: "Learning Task" },
    { id: 1, title: "My Todo" },
    { id: 2, title: "Client Task" },
  ];
  return (
    <section className="dashboard">
      <Notifications></Notifications>
      <div className="card-group grid grid-cols-3 gap-5">
        {taskName?.map((task, index) => (
          <InfoCard key={index} task={task}></InfoCard>
        ))}
      </div>
      <div className="performance  grid-cols-2 gap-5 mt-8 hidden">
        <div className="col-span-1 bg-white rounded-lg shadow-md py-5 px-7">
          <Performance></Performance>
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-md py-5 px-7">
          <div className="source-of-task">
            <SourceOfTask></SourceOfTask>
          </div>
        </div>
      </div>
      <div className="notification-container">
        <button onClick={pushNotifi}>Click for notification</button>
      </div>
    </section>
  );
};

export default Dashboard;
