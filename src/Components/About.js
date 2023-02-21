import React from "react";
import avi from "../Assets/avi.png";
import styles from "../Styles/Content.module.css";
import Skills from "../Components/Skills";

const About = () => {
  return (
    <section
      className={styles.ContentContainer}
      id="About"
      style={{ Height: "760px" }}
    >
      <main style={{ width: "80%" }}>
        <span
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "530px",
            borderRadius: "5px",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        />
        {/* <img src={avi} alt="avi" /> */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              width: "150px",
              textAlign: "center",
              borderRadius: "6px",
              boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                width: "30px",
                backgroundColor: "#d69e2e",
                height: "3px",
              }}
            />
            <h4
              style={{
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "15px",
              }}
            >
              ABOUT ME
            </h4>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "6px",
            }}
          >
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "36px",
              }}
            >
              Who Am I
            </h1>
            <p>
              An Innovative Front-end Developer with 2years experience building
              and maintaining scalable, responsive and well-documented websites.
            </p>
            <br />
            <p>
              A vibrant creative thinker and a problem solver passionate about
              designs, proven ability in collaborating with cross-functional
              teams to deliver high-quality products and translate powerful
              ideas into beautiful, functional design solutions and everyday
              business values.
            </p>
            <br />
            <p>
              I enjoy learning and constantly evolving, keeping abreast of new
              trends and best practices in software development, navigate
              through deadlines and other obstacles in order to deliver quality
              results under time crunches.
            </p>
          </div>
          <button
            style={{
              width: "123px",
              height: "43px",
              backgroundColor: "#F7B633",
              borderRadius: "10px",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#25282B",
              padding: "8px 24px",
              marginTop: "40px",
            }}
          >
            View CV
          </button>

          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {skillList.map((items) => (
              <Skills image={items.image} content={items.content} />
            ))}
          </div> */}
        </div>
      </main>
    </section>
  );
};

export default About;
