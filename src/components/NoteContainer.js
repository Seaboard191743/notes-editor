import React from "react";
import Preload from "./preload";
import Popup from "./popup";
import Input from "./input";
import InputFilter from "./input-filter";
import Note from "./note";
import SetState from "../hooks/setState";

const NoteContainer = () => {
  const {
    note,
    notesList,
    isOpened,
    editNote,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleUpdate,
    deleteHashTag,
    handleInputFilter,
    closePopUp,
  } = SetState();

  const inputProps = { note, handleChange, handleSubmit };
  const notesProps = { notesList, handleDelete, handleEdit };
  const popupProps = {
    isOpened,
    note,
    editNote,
    handleChange,
    handleUpdate,
    deleteHashTag,
    closePopUp,
  };
  return (
    <>
      <Popup {...popupProps} />
      <div className="noteContainer">
        <Input {...inputProps} />
        <Preload list={notesList}>
          <InputFilter onInput={handleInputFilter} />
          <Note {...notesProps} />
        </Preload>
      </div>
    </>
  );
};

export default NoteContainer;
