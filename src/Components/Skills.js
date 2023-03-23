import React from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Content.module.css";

export const SkillsIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="Skills" className={Styles.SkillIntro}>
      <div
        className={Styles.ParentSkills}
        data-aos="zoom-in-left"
        data-aos-duration="3000"
      >
        <div />
        <h5>MY SKILLS</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="3000">
        What I am Good At
      </h1>
    </section>
  );
};

const Skills = ({ image, content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={Styles.main}
      data-aos="zoom-in-right"
      data-aos-duration="3000"
    >
      <main
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={image} alt="img" />
        <div>{content}</div>
      </main>
    </section>
  );
};

export default Skills;
