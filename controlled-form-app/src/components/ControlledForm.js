import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Message disappears after 3 seconds
      setFormData({ name: "", email: "" }); // ✅ Clear inputs after submission
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit" disabled={!formData.name || !formData.email}>
          Submit
        </button>
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </form>
      {submitted && <p className="success-msg">Form submitted successfully! 🎉</p>}
      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
    </div>
  );
};

export default ControlledForm;
