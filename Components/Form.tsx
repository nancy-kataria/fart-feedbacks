"use client";

import React, { useActionState, useState } from "react";
// import { useFormStatus } from "react-dom";

interface FormData {
  name: string;
  feedback: string;
}

async function handleSubmit(formData: FormData): Promise<string | null> {
  try {
    const res = await fetch("/api/SubmitFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error("Failed to submit feedback");
    }

    return null; // return null on success
    // window.location.reload()
  } catch (error) {
    console.log(error)
    return "Error: Failed to submit feedback";
  }
}

function Form() {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    feedback: "",
  });

  const [error, submitAction, isPending] = useActionState(
    async (previousState: string | null, newFormData: FormData) => {
      const error = await handleSubmit(newFormData);
      if (error) {
        // Return the error if there's a failure
        return error;
      }
      // Return null on success
      return null;
    },
    null // Initial state is null (no error)
  );

  // const { pending } = useFormStatus();

  // Handle form input change
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="fart-section" action={()=>submitAction(formData)}>
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

      <div className="submit-container">
        <button className="fart-button" type="submit" disabled={isPending}>
          Submit your farts
        </button>
      </div>

      <p>Your Respnse has been saved. Thank you !</p>
    </form>
  );
}

export default Form;
