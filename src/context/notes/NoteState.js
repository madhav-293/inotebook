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
    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState