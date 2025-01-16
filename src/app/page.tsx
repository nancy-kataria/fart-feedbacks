import { Suspense } from "react";
import Feedbacks from "../../Components/Feedbacks";
import Form from "../../Components/Form";
import connectDB from "../../lib/DBconnect";
import Feedback from "../../Models/Feedback";

const fetchFeedBacks = async () => {
  try {
    await connectDB();
    const feedbackList = await Feedback.find({});

    return feedbackList;
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const feedbackPromise = fetchFeedBacks();

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

      <Form />

      <hr />

      <Suspense fallback={<p>waiting for message...</p>}>
        <Feedbacks feedbackPromise={feedbackPromise} />
      </Suspense>

      <hr />

      <footer>
        <p>I made this because the FartLabs Founder called me a <b>Fake Fan</b></p>
        <p>© 2025, FartLabs Founder&apos;s Girlfriend</p>
      </footer>
    </div>
  );
}
