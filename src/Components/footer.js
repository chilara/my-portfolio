import React from "react";
import Styles from "../Styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <main>
        <div>
          <div className={Styles.footerIcons}>
            <a
              href="https://www.linkedin.com/in/oguine-chisom/"
              target="_blank"
            >
              <FaGithub
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
          <div className={Styles.footerIcons}>
            <a href="https://github.com/chilara" target="_blank">
              <FaLinkedin
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
          <div className={Styles.footerIcons}>
            <a href="mailto:oguinechisomtimothy@gmail.com" target="_blank">
              <MdEmail
                style={{ width: "30px", height: "20px", marginTop: "5px" }}
              />
            </a>
          </div>
        </div>
        <p> &copy; 2023 | Built by Chisom Oguine</p>
      </main>
    </section>
  );
};

export default Footer;
