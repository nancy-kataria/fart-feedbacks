"use client";

import React, { useEffect, useState } from "react";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Feedbacks = ({
  feedbackList,
  loading,
}: {
  feedbackList: feedbackResponse[];
  loading: boolean;
}) => {
  return (
    <div className="fart-section">
      {loading ? (
        <p>Loading...</p>
      ) : (
        feedbackList?.map((record: feedbackResponse) => (
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
