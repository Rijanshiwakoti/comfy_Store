import React from "react";

const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="items-center">
      <label htmlFor={name} className="label cursor-pointer capitalize">
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;
