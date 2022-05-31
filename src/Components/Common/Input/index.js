import React from "react";

const Input = (props) => {
  const { label, type, value, placeholder, disabled, readonly } = props;

  return (
    <>
      {<label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={"form-control"}
        disabled={disabled}
        readonly={readonly}
      />
    </>
  );
};

export default Input;
