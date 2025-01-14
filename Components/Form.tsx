"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";

interface FormData {
  name: string;
  feedback: string;
}

function Form() {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    feedback: "",
  });

  const {pending} = useFormStatus();

  // Handle form input change
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding input field
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Process the form data here (e.g., send it to an API)
  };

  return (
    <form className="fart-section" onSubmit={handleSubmit}>
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
        <textarea
          rows={5}
          id="feedback"
          name="feedback"
          required
          value={formData.feedback}
          onChange={handleInputChange}
        />
      </div>

      {/* <div>
          <label>Give a sparkle if you liked Fartlabs </label>
        </div> */}
      {/* <p>You do not need to submit your real name.</p> */}
      <div className="submit-container">
        <button className="fart-button" type="submit" disabled={pending}>Submit your farts</button>
      </div>
    </form>
  );
}

export default Form;
