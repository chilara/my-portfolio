import React from "react";
import Chisom from "../Assets/Chisom.png";
import styles from "../Styles/Content.module.css";

const About = ({ handleOpen }) => {
  return (
    <section
      className={styles.ContentContainer}
      id="About"
      style={{ Height: "760px" }}
    >
      <main>
        <span data-aos="zoom-in-right" data-aos-duration="3000">
          <img
            src={Chisom}
            alt="avi"
            style={{ height: "510px", width: "100%", borderRadius: "6px" }}
          />
        </span>
        <div
          className={styles.ParentAbout}
          data-aos="zoom-in-left"
          data-aos-duration="3000"
        >
          <div className={styles.ChildAbout}>
            <div />
            <h5>ABOUT ME</h5>
          </div>
          <h1>Who Am I</h1>
          <p>
            I am an innovative Front-end Developer with experience in building
            and maintaining scalable, responsive, and well-documented websites
            and web applications.
          </p>
          <br />
          <p>
            I am a vibrant creative thinker and a problem solver passionate
            about designs with a proven ability to collaborate with
            cross-functional teams to deliver high-quality products and
            translate powerful ideas into beautiful, functional design solutions
            and everyday business values.
          </p>
          <br />
          <p>
            I enjoy learning and constantly evolving, keeping abreast of new
            trends and best practices in software development. Navigating
            through deadlines and other obstacles to deliver quality results
            under time crunches.
          </p>
          <button onClick={handleOpen}>View CV</button>
        </div>
      </main>
    </section>
  );
};

export default About;
