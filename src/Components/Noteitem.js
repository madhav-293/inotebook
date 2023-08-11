import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

 
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash-can mt-1 mx-2"
              style={{ color: "#000000", cursor: "pointer" }}
              onClick={() => { deleteNote(note._id) }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mt-1 mx-2"
              style={{ color: "#000000", cursor: "pointer" }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
