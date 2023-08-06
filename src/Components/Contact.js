import React from "react";
import Styles from "../Styles/Footer.module.css";

const Contact = () => {
  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.ChildContact}>
          <div className={Styles.line} />
          <h3>Get In Touch</h3>
          <div className={Styles.line} />
        </div>
        <form>
          <div>
            <input placeholder="SURNAME" style={{ outline: "none" }} />
            <input placeholder="FIRST NAME" style={{ outline: "none" }} />
          </div>
          <input placeholder="EMAIL" style={{ outline: "none" }} />
          <textarea
            placeholder="MESSAGE"
            style={{ outline: "none" }}
          ></textarea>
        </form>
        <a
          href="mailto:oguinechisomtimothycareer@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>SEND</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
