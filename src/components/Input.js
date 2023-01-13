import React from "react";

const input = props => {
  const { inputtype, label } = props;

  let inputElement = null;
  switch (inputtype) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "text":
      inputElement = <textarea {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
  }

  return (
    <Styled>
      <label>{label}</label>
      {inputElement}
    </Styled>
  );
};
