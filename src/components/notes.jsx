import React from "react";

function Element(props) {
  return (
    <div class="notes">
      <h1>{props.title}</h1>
      <p>{props.Note}</p>
      <button
        onClick={() => {
          props.toDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Element;
