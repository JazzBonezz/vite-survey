import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentScore, maxScore }) => {
  const percentage = (currentScore / maxScore) * 100;

  const getProgressBarColor = () => {
    if (percentage <= 30) {
      return "green"; 
    } else if (percentage <= 70) {
      return "#f69400"; 
    } else {
      return "red"; 
    }
  };


  const progressBarColor = getProgressBarColor();

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: progressBarColor, 
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;
