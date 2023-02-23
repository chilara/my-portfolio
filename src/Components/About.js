import React from "react";
// import avi from "../Assets/avi.png";
import styles from "../Styles/Content.module.css";
import Skills from "../Components/Skills";

const About = () => {
  return (
    <section
      className={styles.ContentContainer}
      id="About"
      style={{ Height: "760px" }}
    >
      <main>
        <span />
        {/* <img src={avi} alt="avi" /> */}
        <div className={styles.ParentAbout}>
          <div className={styles.ChildAbout}>
            <div />
            <h5>ABOUT ME</h5>
          </div>
          <h1>Who Am I</h1>
          <p>
            An Innovative Front-end Developer with 2years experience building
            and maintaining scalable, responsive and well-documented websites.
          </p>
          <br />
          <p>
            A vibrant creative thinker and a problem solver passionate about
            designs, proven ability in collaborating with cross-functional teams
            to deliver high-quality products and translate powerful ideas into
            beautiful, functional design solutions and everyday business values.
          </p>
          <br />
          <p>
            I enjoy learning and constantly evolving, keeping abreast of new
            trends and best practices in software development, navigate through
            deadlines and other obstacles in order to deliver quality results
            under time crunches.
          </p>
          <button>View CV</button>
        </div>
      </main>
    </section>
  );
};

export default About;
