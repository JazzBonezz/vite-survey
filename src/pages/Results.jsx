import React from "react";
import { useSurvey } from "../context/SurveyContext"; // Подключаем контекст
import ProgressBar from "../components/ProgressBar"; // Импортируем прогресс-бар
import "./Results.css";

const Results = () => {
  const { totalScore, getRiskLevelText, gender, age } = useSurvey(); // Получаем данные из контекста
  const MAX_SCORE = 52.5; // Максимальный балл

  return (
    <div className="resultStyle" style={{ textAlign: "center" }}>
      <h1>Ваши результаты</h1>
      <ProgressBar currentScore={totalScore} maxScore={MAX_SCORE} />

      <p>Общее количество баллов: {totalScore.toFixed(2)} из {MAX_SCORE}</p>
      <p>{getRiskLevelText()}</p>

      {/* <div>
        <p>Пол: {gender}</p>
        <p>Возраст: {age}</p>
      </div> */}
    </div>
  );
};

export default Results;
