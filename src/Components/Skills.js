import React from "react";
import Styles from "../Styles/Content.module.css";

export const SkillsIntro = () => {
  return (
    <section id="Skills" className={Styles.SkillIntro}>
      <div
        className={Styles.ParentSkills}
        data-aos="zoom-in-left"
        data-aos-duration="2500"
      >
        <div />
        <h5>MY SKILLS</h5>
      </div>
      <h1 data-aos="zoom-in-left" data-aos-duration="2500">
        What I am Good At
      </h1>
    </section>
  );
};

const Skills = ({ image, content }) => {
  return (
    <section
      className={Styles.main}
      data-aos="zoom-in-right"
      data-aos-duration="2500"
    >
      <img src={image} alt="img" />
      <div>{content}</div>
    </section>
  );
};

export default Skills;
