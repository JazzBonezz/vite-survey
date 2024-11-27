import React, { useState } from "react";
import { useSurvey } from "../context/SurveyContext";

const Opros = ({ name, type = "text", text }) => {
  const { updateAnswer } = useSurvey();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    // Проверяем вводимые данные (числа и точка)
    if (/^\d*\.?\d*$/.test(value)) {
      setError(false); // Убираем ошибку, если значение корректное
      updateAnswer(name, value);
    } else {
      setError(true); // Устанавливаем ошибку, если ввод некорректный
    }
  };

  const handleKeyDown = (e) => {
    // Разрешаем ввод только чисел, точки и функциональных клавиш
    if (
      !(
        (e.key >= "0" && e.key <= "9") || // Цифры
        e.key === "." || // Точка
        ["Backspace", "Delete", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key)
      )
    ) {
      e.preventDefault();
      setError(true); // Показать ошибку при вводе недопустимого символа
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
          inputMode="decimal" // Показывает числовую клавиатуру с точкой на мобильных устройствах
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
