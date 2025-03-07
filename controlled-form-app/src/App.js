import React from "react";
import ControlledForm from "./components/ControlledForm";
import ToggleText from "./components/ToggleText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ControlledForm />
      <ToggleText />
    </div>
  );
}

export default App;
