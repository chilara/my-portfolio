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
        <a href="#Home" className={Styles.Home1}>
          Home
        </a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </section>
  );
};

export default Navbar;
