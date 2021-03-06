import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/edit">
                <button className="editNote" onClick={() => handleEdit(id)}>
                  Edit
                </button>
              </Link>
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
