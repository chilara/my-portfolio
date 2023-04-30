import React from "react";
import Styles from "../Styles/Content.module.css";

export const ProjectIntro = () => {
  return (
    <section id="Projects">
      <div
        className={Styles.ParentProject}
        data-aos="zoom-in-left"
        data-aos-duration="2500"
      >
        <div />
        <h5>MY PROJECTS</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="2500">
        What I Have Done
      </h1>
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
    <div
      className={Styles.firstContainer}
      data-aos="zoom-in-right"
      data-aos-duration="2500"
    >
      {even ? (
        <>
          <div className={Styles.boxOne}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div style={{ display: "flex", gap: "30px" }}>
              <a
                className={Styles.projectButton1}
                role="button"
                href={githubRepo}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className={Styles.projectButton2}
                role="button"
                href={liveSite}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
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
              <a
                className={Styles.projectButton1}
                role="button"
                href={githubRepo}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className={Styles.projectButton2}
                role="button"
                href={liveSite}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
