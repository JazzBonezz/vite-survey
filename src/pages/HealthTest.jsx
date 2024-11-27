import React, { useState } from "react";


import "../App.css";
import Results from "./Results";
import Part2 from "../components/Part2";
import Part1 from "../components/Part1";
import { SurveyProvider } from "../context/SurveyContext";

function HealthTest() {
  const [showResults, setShowResults] = useState(false);

  return (
    <SurveyProvider>
      <div>
        {!showResults ? (
          <>
            <Part1 />
            <Part2 />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                <button onClick={() => setShowResults(true)}>Показать результаты</button>
            </div>    
            
          </>
        ) : (
          <Results />
        )}
      </div>
    </SurveyProvider>
  );
}

export default HealthTest;
