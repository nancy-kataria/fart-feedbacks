// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
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

      <form className="fart-section">
        <div className="input-container">
          <span className="fart-sparkle">
            <label htmlFor="name">Name</label>
          </span>

          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-container">
          <span className="fart-sparkle">
            <label htmlFor="feedback">Feedback</label>
          </span>
          <textarea rows={5} id="feedback" name="feedback" required />
        </div>

        {/* <div>
          <label>Give a sparkle if you liked Fartlabs </label>
        </div> */}
        {/* <p>You do not need to submit your real name.</p> */}
        <div className="submit-container">
        <button className="fart-button">Submit your farts</button>
        </div>
      </form>

      <hr />

      <footer>I made this because the FartLabs Founder called me a <b>Fake Fan</b></footer>
    </div>
  );
}
