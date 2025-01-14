// import Image from "next/image";
// import styles from "./page.module.css";

import Feedbacks from "../../Components/Feedbacks";
import Form from "../../Components/Form";

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

      <Form />

      <Feedbacks />

      <hr />

      <footer>I made this because the FartLabs Founder called me a <b>Fake Fan</b></footer>
    </div>
  );
}
