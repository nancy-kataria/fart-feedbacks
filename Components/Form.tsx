"use client";

import React, { useState } from "react";

function Form() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding input field
    });
  };

  return (
    <form className="fart-section">
      <div className="input-container">
        <span className="fart-sparkle">
          <label htmlFor="name">Name</label>
        </span>

        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <span className="fart-sparkle">
          <label htmlFor="feedback">Feedback</label>
        </span>
        <textarea rows={5} id="feedback" name="feedback" required value={formData.feedback}
          onChange={handleInputChange} />
      </div>

      {/* <div>
          <label>Give a sparkle if you liked Fartlabs </label>
        </div> */}
      {/* <p>You do not need to submit your real name.</p> */}
      <div className="submit-container">
        <button className="fart-button">Submit your farts</button>
      </div>
    </form>
  );
}

export default Form;
