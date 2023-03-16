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
            <div style={{ display: "flex", gap: "30px" }}>
              <div className={Styles.projectButton1} role="button">
                {githubRepo}
              </div>
              <div className={Styles.projectButton2} role="button">
                {liveSite}
              </div>
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
            <div style={{ display: "flex", gap: "30px" }}>
              <div className={Styles.projectButton1} role="button">
                {githubRepo}
              </div>
              <div className={Styles.projectButton2} role="button">
                {liveSite}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
