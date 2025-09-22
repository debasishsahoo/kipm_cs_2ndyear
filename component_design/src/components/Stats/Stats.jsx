import React from "react";
import "./Stats.css";

const stats = [
  { number: 28, label: "Websites" },
  { number: 43, label: "Apps" },
  { number: 95, label: "Ads" },
  { number: 59, label: "Cakes" },
  { number: 18, label: "Logos" },
];

const Stats = () => {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div className="stat" key={index}>
          <div className="number">{stat.number}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
