import { useState } from "react";
import NoteContext from "./NoteContext";

  const notesInitial = [
    {
      _id: "64c8f20d5cb19f79e272b21c",
      user: "64c50d8343fc539615e0210c",
      title: "My title",
      description: "pelanfdbsh",
      tag: "first",
      date: "2023-08-01T11:52:27.699Z",
      __v: 0,
    },
    {
      _id: "64c8f2145cb19f79e272b21e",
      user: "64c50d8343fc539615e0210c",
      title: "My title fed",
      description: "pelanfdbsh sd f",
      tag: "first sdf ",
      date: "2023-08-01T11:52:27.699Z",
      __v: 0,
    },
    {
      _id: "64c8f21a5cb19f79e272b220",
      user: "64c50d8343fc539615e0210c",
      title: "My title fe sdf",
      description: "pelanfdbsh sd fs df ",
      tag: "first sd sdf f ",
      date: "2023-08-01T11:52:27.699Z",
      __v: 0,
    },
    {
      _id: "64c8f21e5cb19f79e272b222",
      user: "64c50d8343fc539615e0210c",
      title: "My title fe  sdf sdf",
      description: "pelanfsdf sddbsh sd fs df ",
      tag: "first sd sdf sdf sdff ",
      date: "2023-08-01T11:52:27.699Z",
      __v: 0,
    },
  ];

const NoteState = (props) => {
  const host = "http://localhost:3001";

  const [notes, setNotes] =useState(notesInitial);

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTBkODM0M2ZjNTM5NjE1ZTAyMTBjIn0sImlhdCI6MTY5MDY5MTUyOH0.XHXNQ9eecH2169iTMAGXCi8fo6rh5KgHXcLh-233bdI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    // const note = await response.json();
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api//notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTBkODM0M2ZjNTM5NjE1ZTAyMTBjIn0sImlhdCI6MTY5MDY5MTUyOH0.XHXNQ9eecH2169iTMAGXCi8fo6rh5KgHXcLh-233bdI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response)
    // const json = await response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
