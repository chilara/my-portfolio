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
      </nav>
    </section>
  );
};

export default Navbar;
