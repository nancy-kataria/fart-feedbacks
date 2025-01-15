"use client";

import { useEffect, useState } from "react";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
}

function Feedbacks() {
  const [feedbackList, setFeedbackList] = useState<feedbackResponse[]>([]);

  const getFeedBacks = async () => {
    try {
      const res = await fetch("/api/getFeedbacks");
      const data = await res.json();
      setFeedbackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedBacks();
  }, []);

  console.log(feedbackList)

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
}

export default Feedbacks;
