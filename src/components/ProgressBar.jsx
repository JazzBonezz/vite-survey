import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentScore, maxScore }) => {
  const percentage = (currentScore / maxScore) * 100;

  // Функция для определения цвета в зависимости от процента
  const getProgressBarColor = () => {
    if (percentage <= 30) {
      return "green"; // Зеленый для 0-30%
    } else if (percentage <= 70) {
      return "#f69400"; // Желтый для 31-70%
    } else {
      return "red"; // Красный для 71-100%
    }
  };

  // Устанавливаем стиль для прогресс-бара
  const progressBarColor = getProgressBarColor();

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: progressBarColor, // Применяем цвет
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;
