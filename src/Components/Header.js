import React from "react";
import Styles from "../Styles/Header.module.css";

const Header = () => {
  return (
    <section className={Styles.HeaderContainer}>
      <main>
        <h6>Hello, My Name Is</h6>
        <h1>CHISOM OGUINE</h1>
        <div className={Styles.ParentHeader}>
          <div className={Styles.line} />
          <h5>A FRONTEND DEVELOPER</h5>
          <div className={Styles.line} />
        </div>
        <div>
          <button className={Styles.Project}>Projects</button>
          <button className={Styles.Contact}>Contact</button>
        </div>
      </main>
    </section>
  );
};

export default Header;
