import React from "react";
import Title from "./title";
import Note from "./note";
import Footer from "./footer";
import Element from "./notes";

function App() {
  const [element, setElement] = React.useState([]);

  function onPress(input) {
    setElement((prevValue) => {
      return [input, ...prevValue];
    });
  }

  function deleteElement(id) {
    setElement((prevVlue) => {
      return prevVlue.filter((note, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Title />
      <div className="center">
        <Note onAdd={onPress} />
      </div>

      {element.map((note, index) => {
        return (
          <Element
            toDelete={deleteElement}
            key={index}
            title={note.title}
            Note={note.Note}
            id={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
