import React from "react";
import Styles from "../Styles/Content.module.css";

export const SkillsIntro = () => {
  return (
    <section id="Skills" className={Styles.SkillIntro}>
      <div className={Styles.ParentSkills}>
        <div />
        <h5>MY SKILLS</h5>
      </div>
      <h1>What I am Good At</h1>
    </section>
  );
};

const Skills = ({ image, content }) => {
  return (
    <main className={Styles.main}>
      <img src={image} alt="img" />
      <div>{content}</div>
    </main>
  );
};

export default Skills;
