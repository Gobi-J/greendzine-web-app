import React from "react";
import Day from "./Day";

export const dayData = [
  {
    day: "Monday",
    percent: 4,
  },
  {
    day: "Tuesday",
    percent: 92,
  },
  {
    day: "Wednesday",
    percent: 122,
  },
  {
    day: "Thursday",
    percent: 93,
  },
  {
    day: "Friday",
    percent: 89,
  },
  {
    day: "Saturday",
    percent: 98,
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <p>Employee Productivity Dashboard</p>
      </div>
      {dayData.map((data) => (
        <Day day={data.day} percent={data.percent} key={data.day} />
      ))}
    </div>
  );
};

export default Dashboard;
