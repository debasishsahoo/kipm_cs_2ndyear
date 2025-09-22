import React from "react";
import "./RecentWork.css";

const RecentWork = () => {
  const works = new Array(9).fill("https://dummyimage.com/550x550/000/fff");

  return (
    <>
      <div className="row column">
        <h3>Our Recent Work</h3>
      </div>
      <div className="row medium-up-3 large-up-4">
        {works.map((src, index) => (
          <div className="column" key={index}>
            <img className="thumbnail" src={src} alt="Work" />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentWork;
