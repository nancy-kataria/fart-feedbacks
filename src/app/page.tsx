"use client";

import { useEffect, useState } from "react";
import Feedbacks from "../../Components/Feedbacks";
import Form from "../../Components/Form";

interface feedbackResponse {
  _id: string;
  name: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function Home() {
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [feedbackList, setFeedbackList] = useState<feedbackResponse[]>([]);

  const fetchFeedBacks = async () => {
    try {
      const res = await fetch("/api/getFeedbacks");
      const data = await res.json();

      setFeedbackList(data);
      setLoading(false)

      return feedbackList;
    } catch (error) {
      console.log(error);
    }
  };

  if(submissionSuccess){
    fetchFeedBacks()
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    setSubmissionSuccess(false)
  }

  useEffect(() => {
    fetchFeedBacks();
  }, []);

  return (
    <div className="intro-container">
      <h2>Welcome to Fart Feedbacks</h2>
      <h6>Where you let us know, how is fartlabs doing so far</h6>
      <h4>
        Visit{" "}
        <a href="https://fartlabs.org/" target="_blank">
          FartLabs
        </a>
      </h4>

      <hr />

      <Form setSubmissionSuccess={setSubmissionSuccess} />

      <hr />

      <Feedbacks feedbackList={feedbackList} loading={loading} />

      <hr />

      <footer>
        <p>
          I made this because the FartLabs Founder called me a <b>Fake Fan</b>
        </p>
        <p>© 2025, FartLabs Founder&apos;s Girlfriend</p>
      </footer>
    </div>
  );
}
