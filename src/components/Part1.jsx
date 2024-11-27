import React from "react";
import Opros from "./Opros";
import Select from "./Select";
import MultiSelect from "./MultiSelect";
import part1Questions from "../data/part1";

const Part1 = () => (
  <div>
    <h1>Часть 1. Демографические данные и факторы риска</h1>
    <ul>
      {part1Questions.map((question, index) => (
        <li key={index}>
          {question.type === "Opros" && (
            <Opros
              name={question.name}
              type={question.inputType}
              text={question.placeholder}
            />
          )}
          {question.type === "Select" && (
            <Select name={question.name} options={question.options} />
          )}
          {question.type === "MultiSelect" && (
            <MultiSelect name={question.name} options={question.options} />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Part1;
