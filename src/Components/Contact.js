import React from "react";
import Styles from "../Styles/Footer.module.css";

const Contact = () => {
  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.line} />
        <h3>Get In Touch</h3>
        <div className={Styles.line} />
      </div>
    </section>
  );
};

export default Contact;
