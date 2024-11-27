import React, { createContext, useState, useContext } from "react";

const SurveyContext = createContext();

export const useSurvey = () => useContext(SurveyContext);

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [gender, setGender] = useState("");  
  const [age, setAge] = useState("");  

  const updateAnswer = (question, value) => {
    const parsedValue = parseFloat(value) || 0; 
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: parsedValue,
    }));
  };

  const calculateScore = () =>
    Object.values(answers).reduce((total, value) => total + (value || 0), 0);
  
  const totalScore = React.useMemo(() => calculateScore(), [answers]);

  const getRiskLevelText = () => {
    const percentage = (totalScore / 52.5) * 100;
    if (percentage <= 30) {
      return "Низкий риск: Рекомендации касаются только образа жизни";
    } else if (percentage <= 70) {
      return "Высокий риск: Рекомендации обратиться к врачу и скорректировать образ жизни";
    } else {
      return "Очень высокий риск: Настоятельно рекомендовано обратиться к врачу в ближайшее время!";
    }
  };

  return (
    <SurveyContext.Provider
      value={{
        answers,
        updateAnswer,
        calculateScore,
        totalScore,
        gender, 
        age,  
        setGender, 
        setAge,  
        getRiskLevelText
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
