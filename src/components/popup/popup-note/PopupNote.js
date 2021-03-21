import React from "react";

const PopupNote = ({ editNote, note }) => {
  return (
    <h2 className="popup__heading">
      <span>Your Note:</span>
      {editNote.note
        ? editNote.note.split(" ").map((item, i) => {
            if (editNote.hashTag.includes(`#${item}`)) {
              return (
                <span className="heading__item heading__item--color" key={i}>
                  {item}
                </span>
              );
            } else {
              return (
                <span className="heading__item" key={i}>
                  {item}
                </span>
              );
            }
          })
        : note.newNote}
    </h2>
  );
};

export default PopupNote;
