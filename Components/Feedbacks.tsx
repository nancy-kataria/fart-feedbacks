"use client";

import React from "react";
import { FeedbackResponse } from "../types";

const Feedbacks = ({
  feedbackList,
  loading,
}: {
  feedbackList: FeedbackResponse[];
  loading: boolean;
}) => {
  return (
    <div className="fart-section">
      {loading ? (
        <p>Loading...</p>
      ) : (
        feedbackList?.map((record: FeedbackResponse) => (
          <div key={record._id}>
            <h5>{record.name}</h5>
            <p>{record.feedback}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Feedbacks;
