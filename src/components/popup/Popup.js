import React from "react";
import { FaTimes } from "react-icons/fa";
import PopupNote from "./popup-note";

const Popup = (props) => {
  const {
    isOpened,
    note,
    editNote,
    handleChange,
    handleUpdate,
    deleteHashTag,
    closePopUp,
  } = props;
  const popupNoteProps = { editNote, note };
  const closeIconStyle = {
    padding: "4px",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    color: "rgba(255, 255, 255, 1)",
    cursor: "pointer",
  };
  return (
    <div className="popup" style={{ display: isOpened ? "block" : "none" }}>
      <FaTimes size="2rem" style={closeIconStyle} onClick={closePopUp} />
      <PopupNote {...popupNoteProps} />
      <div className="edit">
        <input
          type="text"
          name="edit"
          className="edit__field"
          value={note.edit}
          onChange={handleChange}
          placeholder={`Change current note: ${editNote.note}`}
        />
        <div className="edit__hashTagList">
          <h4 className="hashTag__label">HashTags:</h4>
          {isOpened &&
            editNote.hashTag.map((tag, i) => (
              <div className="hashTagItem" key={i}>
                <p>{tag}</p>
                <span
                  className="hashTag-delete"
                  onClick={() => deleteHashTag(tag)}
                >
                  Delete
                </span>
              </div>
            ))}
        </div>
        <button
          className="submitButton submitButton__btn"
          onClick={() => handleUpdate(editNote.id)}
        >
          Save new Note
        </button>
      </div>
    </div>
  );
};

export default Popup;
