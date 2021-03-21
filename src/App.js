import React from "react";
import NoteContainer from "./components/NoteContainer";
import "./scss/_app.scss";

const App = () => {
  return (
    <div className="container">
      <NoteContainer />
    </div>
  );
};

export default App;
