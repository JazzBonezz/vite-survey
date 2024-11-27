import React, { useState } from "react";
import { useSurvey } from "../context/SurveyContext";

const Opros = ({ name, type = "text", text }) => {
  const { updateAnswer } = useSurvey();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d*$/.test(value)) {
      setError(false); 
      updateAnswer(name, value);
    } else {
      setError(true); 
    }
  };

  const handleKeyDown = (e) => {
    if (
      !(
        (e.key >= "0" && e.key <= "9") || 
        e.key === "." || 
        ["Backspace", "Delete", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key)
      )
    ) {
      e.preventDefault();
      setError(true); 
    }
  };

  return (
    <div className="opros">
      <h3 className="question-title">{name}</h3>
      <div className="input-wrapper">
        <input
          type={type}
          placeholder={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputMode="decimal" 
          className={error ? "input-error" : ""}
        />
        {error && (
          <div className="tooltip">
            <span className="tooltip-text">
              Можно вводить только числа и точку
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opros;
