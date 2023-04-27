import React from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "../Styles/Footer.module.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.ChildContact}>
          <div
            className={Styles.line}
            data-aos="fade-left"
            data-aos-duration="2500"
          />
          <h3 data-aos="zoom-in" data-aos-duration="2500">
            Get In Touch
          </h3>
          <div
            className={Styles.line}
            data-aos="fade-right"
            data-aos-duration="2500"
          />
        </div>
        <form>
          <div>
            <input
              placeholder="SURNAME"
              style={{ outline: "none" }}
              data-aos="fade-left"
              data-aos-duration="2500"
            />
            <input
              placeholder="FIRST NAME"
              style={{ outline: "none" }}
              data-aos="fade-right"
              data-aos-duration="2500"
            />
          </div>
          <input
            placeholder="EMAIL"
            style={{ outline: "none" }}
            data-aos="fade-left"
            data-aos-duration="2500"
          />
          <textarea
            placeholder="MESSAGE"
            style={{ outline: "none" }}
            data-aos="fade-right"
            data-aos-duration="2500"
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
