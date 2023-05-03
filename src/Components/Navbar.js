import React from "react";
import Styles from "../Styles/Header.module.css";
import { FcSportsMode } from "react-icons/fc";

const Navbar = () => {
  return (
    <section className={Styles.NavbarContainer}>
      <FcSportsMode
        style={{ width: "25px", height: "25px", marginLeft: "5rem" }}
      />
      <nav>
        <a href="Home" activeClass="active">
          Home
        </a>
        <a href="#About" activeStyle={Styles.ActiveState}>
          About
        </a>
        <a href="#Skills" activeClass="active">
          Skills
        </a>
        <a href="#Services" activeClass="active">
          Services
        </a>
        <a href="#Projects" activeClass="active">
          Projects
        </a>
        <a href="#Contact" activeClass="active">
          Contact
        </a>
        {/* <button className={Styles.hamburger} onclick="toggler()">
          <div className={Styles.lines}></div>
          <div className={Styles.lines}></div>
          <div className={Styles.lines}></div>
        </button> */}
      </nav>
      {/* <div className={Styles.menuMobile}>
        <a href="Home" className="home active">
          Home
        </a>
        <a href="#About" className="about">
          About
        </a>
        <a href="#Skills" className="contact">
          Skills
        </a>
        <a href="#Services" className="Services">
          Services
        </a>
        <a href="#Project" className="Project">
          Project
        </a>
        <a href="#Contact" className="Contact">
          Project
        </a>
      </div> */}
    </section>
  );
};

export default Navbar;
