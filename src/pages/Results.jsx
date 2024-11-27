import React from "react";
import { useSurvey } from "../context/SurveyContext"; 
import ProgressBar from "../components/ProgressBar"; 
import "./Results.css";

const Results = () => {
  const { totalScore, getRiskLevelText, gender, age } = useSurvey(); 
  const MAX_SCORE = 52.5; 

  return (
    <div className="resultStyle" style={{ textAlign: "center" }}>
      <h1>Ваши результаты</h1>
      <ProgressBar currentScore={totalScore} maxScore={MAX_SCORE} />

      <p>Общее количество баллов: {totalScore.toFixed(2)} из {MAX_SCORE}</p>
      <p>{getRiskLevelText()}</p>

    </div>
  );
};

export default Results;
