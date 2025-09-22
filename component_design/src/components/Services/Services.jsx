import React from "react";
import "./Services.css";

const services = [
  { title: "Photoshop", text: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis..." },
  { title: "Javascript", text: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis..." },
  { title: "Marketing", text: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis..." },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
