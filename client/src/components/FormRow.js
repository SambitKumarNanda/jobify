import React from "react";

function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="form-input"
        name={name}
      />
    </div>
  );
}

export default FormRow;
