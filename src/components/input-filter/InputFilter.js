import React from "react";
const InputFilter = ({ onInput }) => {
  return (
    <input
      onInput={onInput}
      type="text"
      className="inputFilter"
      placeholder="Filter notes by #hashTag"
    />
  );
};

export default InputFilter;
