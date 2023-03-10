import React from "react";
import Styles from "../Styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footer = () => {
  return (
    <section className={Styles.footer}>
      <main>
        <div>
          <FaGithub style={{ width: "45px", height: "35px" }} />
          <FaLinkedin style={{ width: "45px", height: "35px" }} />
          <MdEmail style={{ width: "45px", height: "35px" }} />
        </div>
        <p> &copy; CHISOM OGUINE 2023</p>
      </main>
    </section>
  );
};

export default footer;
