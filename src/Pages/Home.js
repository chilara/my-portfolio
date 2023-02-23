import React from "react";
import Styles from "../Styles/Content.module.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import { SkillsIntro } from "../Components/Skills";
import Services from "../Components/Services";
import { ServicesIntro } from "../Components/Services";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo10 from "../Assets/logo10.png";
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
    image: logo10,
    content: "GIT",
  },
  {
    image: logo9,
    content: "MUI",
  },
];

const ServiceList = [
  {
    image: "",
    heading: "FRONTEND DEVELOPMENT",
    content: "",
  },
  {
    image: "",
    heading: "RESPONSIVE DESIGNS",
    content: "",
  },
  {
    image: "",
    heading: "CLEAN CODE",
    content: "",
  },
  {
    image: "",
    heading: "WEB DESIGN",
    content: "",
  },
  {
    image: "",
    heading: "RESTFUL SERVICES AND APIs",
    content: "",
  },
  {
    image: "",
    heading: "WEB DEVELOPMENT",
    content: "",
  },
];

const Home = () => {
  return (
    <section>
      <div className={Styles.headerImage}>
        <main>
          <Navbar />
          <Header />
        </main>
      </div>
      <About />
      <div className={Styles.skillsContainer}>
        <SkillsIntro />
        <div
          className={Styles.SkillsFlex}
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
      <div className={Styles.ServicesContainer}>
        <ServicesIntro />
        <div
          className={Styles.ServicesFlex}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {ServiceList.map((items) => (
            <Services
              image={items.image}
              heading={items.heading}
              content={items.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
