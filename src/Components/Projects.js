import React, { useState } from "react";
import Styles from "../Styles/Content.module.css";
import Dialog from "@mui/material/Dialog";

export const ProjectIntro = () => {
  return (
    <section id="Projects" className={Styles.ProjectMain}>
      <div
        className={Styles.ParentProject}
        data-aos="zoom-in-left"
        data-aos-duration="3300"
      >
        <div />
        <h5>MY PROJECTS</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="3300">
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
  const [open, setOpen] = useState(false);

  const handleGithubClick = (e) => {
    if (githubRepo === "#") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={Styles.firstContainer}
        data-aos="zoom-in-right"
        data-aos-duration="3300"
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
                  onClick={handleGithubClick}
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
                  onClick={handleGithubClick}
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

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            padding: "30px",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{
            fontWeight:"600",
            marginBottom: "8px"
          }}>Repository Unavailable.</h2>
          <p>This is an organization's private project repository.</p>

          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default Projects;
