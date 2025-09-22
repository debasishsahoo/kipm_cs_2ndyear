import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="text">
        <h2>Our Agency, our selves.</h2>
        <p>
          Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
          In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
          Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris,
          quis sollicitudin sapien justo in libero.
        </p>
      </div>
      <div className="image">
        <img src="https://dummyimage.com/600x400/000/fff" alt="Agency" />
      </div>
    </div>
  );
};

export default MainContent;
