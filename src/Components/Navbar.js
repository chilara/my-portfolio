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
        <a href="" className={Styles.active}>
          Home
        </a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Services">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </section>
  );
};

export default Navbar;
