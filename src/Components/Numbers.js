import React from "react";
import "../App.css";

const Numbers = ({ index, currentIndex, number }) => {
  return (
    <div key={index} className="number">
      <div className={`number-text ${index === currentIndex ? "active" : ""}`}>
        {number}
      </div>
    </div>
  );
};

export default Numbers;
