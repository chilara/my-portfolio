import React from "react";
import Styles from "../Styles/Content.module.css";

const Skills = ({ image, content }) => {
  return (
    <section
      className={Styles.skillsContainer}
      style={{ height: "646px", backgroundColor: "#2C2E2D" }}
    >
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
        }}
      >
        What I am Good At
      </h1>

      <main>
        <img src={image} alt="img" style={{ width: "50px", height: "35px" }} />
        <div>{content}</div>
      </main>
    </section>
  );
};

export default Skills;
