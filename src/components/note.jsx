import React, { useState } from "react";
import Element from "./notes";
import { calledByNotes } from "./App";

function Note(props) {
  const [element, setElement] = useState([]);

  const [inputValue, setInputValue] = useState({
    title: "",
    Note: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    console.log(inputValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.title.trim() === "" || inputValue.Note.trim() === "") return;
    //call a function that creates an element from the app.jsx
    props.onAdd(inputValue);
    setInputValue({
      title: "",
      Note: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="note">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          value={inputValue.title}
        />

        <textarea
          onChange={handleChange}
          rows="3"
          placeholder="Take a note..."
          name="Note"
          value={inputValue.Note}
        ></textarea>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Note;
