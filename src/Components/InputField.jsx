import React from "react";

const InputField = ({ label, type, name, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset-legend capitalize">{label}</label>
      <input
        type={type}
        name={name}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};

export default InputField;
