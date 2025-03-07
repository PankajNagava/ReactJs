import React, { useState } from "react";
import "./ToggleText.css"; // ✅ Separate CSS file for animations

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="toggle-container">
      <h2>Show/Hide Text</h2>
      <button
        className={`toggle-btn ${isVisible ? "hide-btn" : "show-btn"}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Text ⬆" : "Show Text ⬇"}
      </button>
      <div className={`toggle-text ${isVisible ? "visible" : "hidden"}`}>
        This is the text that gets toggled.
      </div>
    </div>
  );
};

export default ToggleText;
