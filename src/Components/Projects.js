import React from "react";
import Styles from "../Styles/Content.module.css";

export const ProjectIntro = () => {
  return (
    <section id="Projects">
      <div className={Styles.ParentProject}>
        <div />
        <h5>MY PROJECTS</h5>
      </div>
      <h1>What I Have Done</h1>
    </section>
  );
};

const Projects = ({
  title,
  description,
  githubRepo,
  liveSite,
  image,
  even,
}) => {
  return (
    <div className={Styles.firstContainer}>
      {even ? (
        <>
          <div className={Styles.boxOne}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div
              style={{ display: "flex", gap: "10px", border: "1px solid red" }}
            >
              <button>{githubRepo}</button>
              <button>{liveSite}</button>
            </div>
          </div>
          <div className={Styles.boxTwo}>{image}</div>
        </>
      ) : (
        <>
          <div className={Styles.boxTwo}>{image}</div>
          <div className={Styles.boxOne}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div
              style={{ display: "flex", gap: "10px", border: "1px solid red" }}
            >
              <button>{githubRepo}</button>
              <button>{liveSite}</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
