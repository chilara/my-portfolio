import React from "react";
import Styles from "../Styles/Header.module.css";

const Header = () => {
  return (
    <section className={Styles.HeaderContainer} style={{ height: "755px" }}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <h6
          style={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "72px",
            fontStyle: "normal",
          }}
        >
          Hello, My Name Is
        </h6>
        <h1 style={{ fontWeight: "800", fontSize: "64px", lineHeight: "72px" }}>
          CHISOM OGUINE
        </h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <div className={Styles.line} />
          <h6
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "72px",
            }}
          >
            A FRONTEND DEVELOPER
          </h6>
          <div className={Styles.line} />
        </div>
        <div>
          <button
            style={{
              width: "120px",
              height: "43px",
              border: "1px solid #F7B633",
              borderRadius: "10px",
              padding: "8px 24px",
              cursor: "pointer",
              color: "#F7B633",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "150% ",
            }}
          >
            Projects
          </button>
          <button
            style={{
              width: "118px",
              height: "43px",
              backgroundColor: "#F7B633",
              borderRadius: "10px",
              padding: "8px 24px",
              cursor: "pointer",
              color: "#25282B",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "150% ",
            }}
          >
            Contact
          </button>
        </div>
      </main>
    </section>
  );
};

export default Header;
