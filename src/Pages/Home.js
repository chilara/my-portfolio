import React, { useState, useEffect } from "react";
import Styles from "../Styles/Content.module.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import { SkillsIntro } from "../Components/Skills";
import Services from "../Components/Services";
import { ServicesIntro } from "../Components/Services";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo10 from "../Assets/logo10.png";
import logo9 from "../Assets/logo9.png";
import cleanCode from "../Assets/cleanCode.png";
import responsive from "../Assets/responsive.png";
import frontend from "../Assets/frontend.png";
import webDesign from "../Assets/webDesign.png";
import restApi from "../Assets/restApi.png";
import webDev from "../Assets/webDev.png";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { MdDisabledByDefault } from "react-icons/md";
// import { getBase64 } from "../Utilis";

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
    image: frontend,
    heading: "FRONTEND DEVELOPMENT",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: responsive,
    heading: "RESPONSIVE DESIGNS",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: cleanCode,
    heading: "CLEAN CODE",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: webDesign,
    heading: "WEB DESIGN",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: restApi,
    heading: "RESTFUL SERVICES AND APIs",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: webDev,
    heading: "WEB DEVELOPMENT",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pdfFile, setPdfFile] = useState("");

  useEffect(() => {
    const file = require("../Assets/Resume.pdf");
    setPdfFile(file);
  }, []);

  return (
    <section>
      <div className={Styles.headerImage}>
        <main>
          <Navbar />
          <Header />
        </main>
      </div>
      <About handleOpen={handleOpen} />
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
      <Projects />
      <Contact />
      <Footer />
      <Dialog
        onClose={handleClose}
        open={open}
        className={Styles.DialogContainer}
      >
        <div className={Styles.DialogT}>
          <DialogTitle>My CV</DialogTitle>
          <button
            onClick={handleClose}
            style={{ width: "20px", height: "20px" }}
          >
            <MdDisabledByDefault style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
          }}
        >
          <object data={pdfFile}></object>
        </div>
      </Dialog>
    </section>
  );
};

export default Home;
