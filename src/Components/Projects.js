import React from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Content.module.css";

export const ProjectIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="Projects">
      <div
        className={Styles.ParentProject}
        data-aos="zoom-in-left"
        data-aos-duration="3000"
      >
        <div />
        <h5>MY PROJECTS</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="3000">
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={Styles.firstContainer}
      data-aos="zoom-in-right"
      data-aos-duration="3000"
    >
      {even ? (
        <>
          <div
            className={Styles.boxOne}
            // data-aos="zoom-in-right"
            // data-aos-duration="3000"
          >
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
          <div
            className={Styles.boxTwo}
            // data-aos="zoom-in-right"
            // data-aos-duration="3000"
          >
            {image}
          </div>
        </>
      ) : (
        <>
          <div
            className={Styles.boxTwo}
            // data-aos="zoom-in-left"
            // data-aos-duration="3000"
          >
            {image}
          </div>
          <div
            className={Styles.boxOne}
            // data-aos="zoom-in-left"
            // data-aos-duration="3000"
          >
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
