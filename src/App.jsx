import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HealthTest from "./pages/HealthTest";
import GenderAgeForm from "./pages/GenderAgeForm";
import Results from "./pages/Results"; 
import { SurveyProvider } from "./context/SurveyContext"; 

function App() {
  return (
    <SurveyProvider>
      <Routes>

        <Route
          path="/"
          element={
            <div className="welcomePage">
              <h1 className="welcome-h1">Оценка состояния нижних конечностей</h1>
              <Link to="/test" className="testLink">Начать</Link>
            </div>
          }
        />

        <Route path="/test" element={<GenderAgeForm />} />
        <Route path="/health-test" element={<HealthTest />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </SurveyProvider>
  );
}

export default App;
