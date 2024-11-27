import React, { useState } from "react";
import { useSurvey } from "../context/SurveyContext"; // Подключаем контекст
import { useNavigate } from "react-router-dom";

const GenderAgeForm = () => {
  const { setGender, setAge } = useSurvey();  // Используем контекст для обновления пола и возраста
  const [localGender, setLocalGender] = useState("");
  const [localAge, setLocalAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localGender || !localAge) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    setGender(localGender);  // Обновляем данные в контексте
    setAge(localAge);  // Обновляем данные в контексте
    navigate("/health-test");  // Переход на страницу с тестом
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Введите ваш пол и возраст</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Пол:
            <select value={localGender} onChange={(e) => setLocalGender(e.target.value)}>
              <option value="">Выберите</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
              <option value="other">Другое</option>
            </select>
          </label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>
            Возраст:
            <input
              type="number"
              value={localAge}
              onChange={(e) => setLocalAge(e.target.value)}
              placeholder="Введите ваш возраст"
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Далее
        </button>
      </form>
    </div>
  );
};

export default GenderAgeForm;
