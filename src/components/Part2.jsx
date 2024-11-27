import React from "react";
import Select from "./Select";
import part2Questions from "../data/part2";

const Part2 = () => (
  <div>
    <h1>Часть 2. Симптомы поражения сосудов нижних конечностей</h1>
    <ul>
      {part2Questions.map((question, index) => (
        <li key={index}>
          {question.type === "Select" && (
            <Select name={question.name} options={question.options} />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Part2;
