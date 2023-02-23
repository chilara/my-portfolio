import React from "react";
import Styles from "../Styles/Content.module.css";

export const ServicesIntro = () => {
  return (
    <section id="Services" className={Styles.ServicesIntro}>
      <div className={Styles.ParentServices}>
        <div />
        <h5>MY SERVICES</h5>
      </div>
      <h1>What I Can Do</h1>
    </section>
  );
};

const Services = ({ image, heading, content }) => {
  return (
    <main className={Styles.ServicesMain}>
      <img src={image} alt="img" style={{ width: "420px", height: "284px" }} />
      <h3>{heading}</h3>
      <div>{content}</div>
    </main>
  );
};

export default Services;
