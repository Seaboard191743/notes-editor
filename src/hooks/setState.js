import { useState, useEffect } from "react";

const SetState = () => {
  const [note, setNote] = useState({
    newNote: "",
    edit: "",
    editNote: {},
    notesList: [],
    filteredNotes: [],
    isOpened: false,
  });

  const saveNote = (notes) =>
    localStorage.setItem("list", JSON.stringify(notes));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const listUpdates = (selector) => {
    const hashTags = selector.split(" ").filter((item) => item.startsWith("#"));
    const newNote = selector
      .trim()
      .split(" ")
      .map((item) => (item.startsWith("#") ? item.slice(1) : item))
      .join(" ");
    const newNotesList = [
      ...note.notesList,
      {
        id: note.notesList.length + 1,
        note: newNote,
        hashTag: [...hashTags],
      },
    ];
    return { hashTags, newNote, newNotesList };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.newNote) {
      alert("Please, add a Note");
      return;
    }
    const { newNotesList } = listUpdates(note.newNote);

    setNote((prev) => ({
      ...prev,
      newNote: "",
      edit: "",
      notesList: newNotesList,
    }));
    saveNote(newNotesList);
  };
  const handleInputFilter = (e) => {
    const { value } = e.target;
    // const valueArr = value.split(" ");
    const filteredNotes = note.notesList.filter((note) =>
      note.hashTag.includes(value)
    );
    setNote((prev) => ({ ...prev, filteredNotes }));
    console.log(filteredNotes);
  };

  useEffect(() => {
    setNote((prev) => ({ ...prev, notesList: prev.filteredNotes }));
  }, [note.filteredNotes]);

  const handleUpdate = (id) => {
    if (!note.edit) {
      alert("Please, update the Note");
      return;
    }
    const { hashTags, newNote } = listUpdates(note.edit);
    const newNotesList = note.notesList.map((item) =>
      item.id === id
        ? { id: item.id, note: newNote, hashTag: [...hashTags] }
        : item
    );
    setNote((prev) => ({
      ...prev,
      newNote: "",
      edit: "",
      notesList: newNotesList,
      isOpened: false,
    }));
    saveNote(newNotesList);
  };
  const handleDelete = (id) => {
    const newNotesList = note.notesList.filter((note) => note.id !== id);
    setNote((prev) => ({ ...prev, notesList: newNotesList }));
    saveNote(newNotesList);
  };
  const handleEdit = (id) => {
    setNote((prev) => ({
      ...prev,
      isOpened: true,
      editNote: prev.notesList.find((note) => note.id === id),
    }));
  };
  const deleteHashTag = (tag) => {
    const newHashTags = note.editNote.hashTag.filter((item) => item !== tag);
    const newNotesList = note.notesList.map((item) => {
      return item.id === note.editNote.id
        ? { ...item, hashTag: newHashTags }
        : item;
    });
    setNote((prev) => ({
      ...prev,
      editNote: {
        ...prev.editNote,
        hashTag: newHashTags,
      },
      notesList: newNotesList,
    }));
    saveNote(newNotesList);
  };
  const closePopUp = () => {
    setNote((prev) => ({ ...prev, isOpened: false }));
  };

  useEffect(() => {
    if (localStorage.getItem("list")) {
      setNote((prev) => ({
        ...prev,
        notesList:
          prev.filteredNotes.length > 0
            ? prev.filteredNotes
            : JSON.parse(localStorage.getItem("list")),
      }));
    }
  }, [note.filteredNotes]);
  const { notesList, isOpened, editNote } = note;

  return {
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
  };
};

export default SetState;
