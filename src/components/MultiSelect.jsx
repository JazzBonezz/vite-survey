import React from "react";

const MultiSelect = ({ name, options }) => (
  <div>
    <h3>{name}</h3>
    {options.map((option, index) => (
      <label key={index} style={{ display: "block", marginBottom: "5px" }}>
        <input type="checkbox" value={option.value} />
        {option.label}
      </label>
    ))}
  </div>
);

export default MultiSelect;
