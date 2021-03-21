import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <div className="noteContainer">
        <Input {...inputProps} />
        <Switch>
          <Route exact path="/">
            <Preload list={notesList}>
              <InputFilter onInput={handleInputFilter} />
              <Note {...notesProps} />
            </Preload>
          </Route>
          <Route path="/edit">
            <Popup {...popupProps} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default NoteContainer;
