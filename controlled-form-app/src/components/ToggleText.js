import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="toggle-container">
      <h2>Show/Hide Text</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p>This is the text that gets toggled.</p>}
    </div>
  );
};

export default ToggleText;
