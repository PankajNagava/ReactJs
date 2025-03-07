import React, { useState } from "react";

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
      {isVisible && <p className="toggle-text">This is the text that gets toggled.</p>}
    </div>
  );
};

export default ToggleText;
