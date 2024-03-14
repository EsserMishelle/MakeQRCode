// In App.js
import React from "react";
import "./App.css";
import Contact from "./components/Contact";

import MakeQRCode from "./components/makeQRCode";

function App() {
  return (
    <div className="App">
      <MakeQRCode />
      <br />
      <br />
      <Contact />
    </div>
  );
}

export default App;
