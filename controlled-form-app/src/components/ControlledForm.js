import React, { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]); // ✅ Store submitted users
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmittedData([...submittedData, formData]); // ✅ Store new user
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // ✅ Show success message briefly
      setFormData({ name: "", email: "" }); // ✅ Clear input fields
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

      {/* ✅ Show submitted users */}
      {submittedData.length > 0 && (
        <div className="submitted-list">
          <h3>Submitted Users</h3>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>{data.name}</strong> ({data.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ControlledForm;
