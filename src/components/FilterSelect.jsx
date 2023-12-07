import React from "react";

export default function FilterSelect({
  options,
  value,
  onChange,
  placeholder,
}) {
  return (
    <select className="selectInput" onChange={onChange} value={value}>
      <option value="">{placeholder}</option>
      {options.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
