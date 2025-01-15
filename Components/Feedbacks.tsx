// "use client";

import React, { use } from "react";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
}

const getFeedBacks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getFeedbacks");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Feedbacks = () => {
  // const [feedbackList, setFeedbackList] = useState<feedbackResponse[]>([]);

  // useEffect(() => {
  //   getFeedBacks();
  // }, []);

  const feedbackList = use(getFeedBacks());

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
};

export default Feedbacks;
