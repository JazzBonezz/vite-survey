import React from "react";
import { useSurvey } from "../context/SurveyContext";

const Select = ({ name, options }) => {
  const { updateAnswer } = useSurvey();

  const handleChange = (e) => {
    updateAnswer(name, e.target.value);
  };

  return (
    <div className="select">
      <h3 className="question-title">{name}</h3>
      <select className="dropdown" onChange={handleChange} defaultValue="">
        <option value="" disabled hidden>
          Выберите ответ
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
