import React, { use } from "react";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Feedbacks = ({ feedbackPromise }: { feedbackPromise: Promise<feedbackResponse[] | undefined> }) => {
  const feedbackList: feedbackResponse[] | undefined = use(feedbackPromise);

  return (
    <div className="fart-section">
      {feedbackList?.map((record: feedbackResponse) => (
        <div key={record._id}>
          <h5>{record.name}</h5>
          <p>{record.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedbacks;
