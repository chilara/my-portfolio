import React from "react";
import Styles from "../Styles/Content.module.css";

export const SkillsIntro = () => {
  return (
    <section id="Skills">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          width: "130px",

          textAlign: "center",
          borderRadius: "6px",
          boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "30px",
            backgroundColor: "#d69e2e",
            height: "3px",
          }}
        />
        <h4
          style={{
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "16px",
          }}
        >
          MY SKILLS
        </h4>
      </div>

      <h1
        style={{
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "36px",
          marginBottom: "40px",
          marginTop: "15px",
        }}
      >
        What I am Good At
      </h1>
    </section>
  );
};

const Skills = ({ image, content }) => {
  return (
    <main className={Styles.main}>
      <img src={image} alt="img" style={{ width: "50px", height: "50px" }} />
      <div>{content}</div>
    </main>
  );
};

export default Skills;
