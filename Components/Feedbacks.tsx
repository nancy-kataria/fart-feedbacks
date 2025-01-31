import { use } from "react";

interface FeedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Feedbacks = ({ feedbackPromise }: { feedbackPromise: Promise<FeedbackResponse[]> }) => {
  const feedbackList: FeedbackResponse[] = use(feedbackPromise);

  return (
    <div className="fart-section">
      {feedbackList?.map((record: FeedbackResponse) => (
        <div key={record._id}>
          <h5>{record.name}</h5>
          <p>{record.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedbacks;
