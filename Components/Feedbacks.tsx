"use client";
import React, { useEffect, useState } from "react";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
}

const Feedbacks = () => {
  const [feedbackList, setFeedbackList] = useState<feedbackResponse[]>([]);

  const fetchFeedBacks = async () => {
    try {
      const res = await fetch(`/api/getFeedbacks`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setFeedbackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeedBacks();
  }, []);

  return (
    <div className="fart-section">
      {feedbackList.map((record: feedbackResponse) => (
        <div key={record._id}>
          <h5>{record.name}</h5>
          <p>{record.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedbacks;
