import React from "react";

const Note = ({ notesList, handleEdit, handleDelete }) => {
  return (
    <>
      {notesList.map(({ id, note }) => {
        return (
          <div className="note note__outer" key={id}>
            <div className="note__value">
              <span className="note__label">Note:</span> {note}
            </div>
            <div className="note__manage">
              <button className="editNote" onClick={() => handleEdit(id)}>
                Edit
              </button>
              <button className="deleteNote" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Note;
