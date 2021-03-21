import React from "react";

const Input = ({ note, handleChange, handleSubmit }) => {
  return (
    <form className="inputField" onSubmit={handleSubmit}>
      <input
        className="noteInput"
        type="text"
        name="newNote"
        value={note.newNote}
        onChange={handleChange}
        placeholder="Add a Note (use '#' for a hashTag)"
      />
      <button className="submitButton">Add Note</button>
    </form>
  );
};

export default Input;
