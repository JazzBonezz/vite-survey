import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HealthTest from "./pages/HealthTest";
import GenderAgeForm from "./pages/GenderAgeForm";
import Results from "./pages/Results"; // Импортируем компонент Results
import { SurveyProvider } from "./context/SurveyContext"; // Импортируем контекст

function App() {
  return (
    <SurveyProvider>
      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <div className="welcomePage">
              <h1 className="welcome-h1">Оценка состояния нижних конечностей</h1>
              <Link to="/test" className="testLink">Начать</Link>
            </div>
          }
        />
        {/* Страница ввода пола и возраста */}
        <Route path="/test" element={<GenderAgeForm />} />
        {/* Страница с основным тестом */}
        <Route path="/health-test" element={<HealthTest />} />
        {/* Страница с результатами */}
        <Route path="/results" element={<Results />} />
      </Routes>
    </SurveyProvider>
  );
}

export default App;
