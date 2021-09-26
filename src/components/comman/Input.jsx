import React from "react";
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control mb-2"
        id={name}
        name={name}
        placeholder="Enter Username"
      />
    </div>
  );
};

export default Input;
