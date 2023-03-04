import React from "react";
import Styles from "../Styles/Content.module.css";

const Projects = () => {
  return (
    <section id="Projects" className={Styles.ProjectIntro}>
      <div className={Styles.ParentProject}>
        <div />
        <h5>MY PROJECTS</h5>
      </div>
      <h1>What I Have Done</h1>
      <div className={Styles.firstContainer}>
        <div className={Styles.boxOne}></div>
        <div className={Styles.boxTwo}></div>
      </div>
      <br /> <br />
      <div className={Styles.firstContainer}>
        <div className={Styles.boxOne}></div>
        <div className={Styles.boxTwo}></div>
      </div>
      <br /> <br />
      <div className={Styles.firstContainer}>
        <div className={Styles.boxOne}></div>
        <div className={Styles.boxTwo}></div>
      </div>
      <br /> <br />
      <div className={Styles.firstContainer}>
        <div className={Styles.boxOne}></div>
        <div className={Styles.boxTwo}></div>
      </div>
    </section>
  );
};

export default Projects;
