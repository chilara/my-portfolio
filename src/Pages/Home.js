import React from "react";
import Styles from "../Styles/Content.module.css";
import { SkillsIntro } from "../Components/Skills";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo8 from "../Assets/logo8.png";
import logo9 from "../Assets/logo9.png";

const skillList = [
  {
    image: logo1,
    content: "REACT",
  },
  {
    image: logo2,
    content: "TAILWIND",
  },
  {
    image: logo3,
    content: "REDUX",
  },
  {
    image: logo4,
    content: "HTML5",
  },
  {
    image: logo5,
    content: "CSS3",
  },
  {
    image: logo6,
    content: "JAVASCRIPT",
  },
  {
    image: logo8,
    content: "BOOTSTRAP",
  },
  {
    image: logo9,
    content: "MUI",
  },
];

const Home = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <About />
      <div
        className={Styles.skillsContainer}
        style={{ height: "646px", backgroundColor: "#2C2E2D" }}
      >
        <SkillsIntro />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {skillList.map((items) => (
            <Skills image={items.image} content={items.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
