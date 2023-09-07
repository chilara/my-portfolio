import React, { useState, useEffect } from "react";
import Styles from "../Styles/Content.module.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import { SkillsIntro } from "../Components/Skills";
import Services from "../Components/Services";
import { ServicesIntro } from "../Components/Services";
import Projects, { ProjectIntro } from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer_";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo10 from "../Assets/logo10.png";
import logo9 from "../Assets/logo9.png";
import logo7 from "../Assets/logo7.png";
import logo11 from "../Assets/logo11.png";
import logo12 from "../Assets/logo12.png";
import logo13 from "../Assets/logo13.png";
import cleanCode from "../Assets/cleanCode.png";
import responsive from "../Assets/responsive.png";
import frontend from "../Assets/frontend.png";
import webDesign from "../Assets/webDesign.png";
import restApi from "../Assets/restApi.png";
import webDev from "../Assets/webDev.png";
import advice_gen_app from "../Assets/advice_gen_app.png";
import Rest_countries_API from "../Assets/Rest_countries_API.png";
import Docre from "../Assets/Docre.png";
import tanta from "../Assets/tanta.png";
import macaw from "../Assets/macaw.png";
import we_muveee from "../Assets/we_muveee.png";
import Dialog from "@mui/material/Dialog";

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
    image: logo9,
    content: "MUI",
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
    image: logo7,
    content: "NODE.JS",
  },
  {
    image: logo11,
    content: "TYPESCRIPT",
  },
  {
    image: logo12,
    content: "CHAKRA UI",
  },
  {
    image: logo13,
    content: "FIGMA",
  },
];

const ServiceList = [
  {
    image: frontend,
    heading: "FRONTEND DEVELOPMENT",
    content:
      "High quality development of sites with extreme attention to details at a professional level.",
  },
  {
    image: responsive,
    heading: "RESPONSIVE DESIGNS",
    content:
      "Quality and effective development of sites to render and adapt to any given device.",
  },
  {
    image: cleanCode,
    heading: "CLEAN CODE",
    content:
      "Clean code practice to maintain the main concepts and skills needed to use code and computational thinking.",
  },
  {
    image: webDesign,
    heading: "WEB DESIGN",
    content:
      "Mastermind the process of building the elements of a website, which entails the overall look and feel of the website.",
  },
  {
    image: restApi,
    heading: "RESTFUL SERVICES AND APIs",
    content:
      "Creation and consumption of RESTful (Representational State Transfer) Web services and APIs.",
  },
  {
    image: webDev,
    heading: "WEB DEVELOPMENT",
    content:
      "Meticulous development of websites that are up to standard and can render properly on any web browser.",
  },
];

const projectLists = [
  {
    title: "Tanta Innovatives Limited",
    description:
      "This project is the official website of Tanta Innovatives Limited. An IT consulting and software development company that transforms businesses with cutting edge software solutions. I was part of the Frontend team that built this website. Built with React, CSS, Chakra UI, Styled-components, RESTFUL APIs, Axios, Node.js,",
    githubRepo: "",
    liveSite: "https://tantainnovatives.com/",
    image: (
      <img
        src={tanta}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "Docre Blog",
    description:
      "This is a blog website where users can upload their articles in a conventional style with accompanying avatars, titles, and URLs of the article. Built with React, CSS, RESTFUL APIs, Axios, Node.js, MongoDB.",
    githubRepo: "https://github.com/chilara/Docre-Blog",
    liveSite: "https://capstone-project-chilara.vercel.app/",
    image: (
      <img
        src={Docre}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "We Muveee Dashboard",
    description:
      "This is a Dashboard for a logistic company which shows the transportation queue of its customers, with their the list of delivery for customers, showing customer ID, Customer Name, Pick Up location, Drop off Location. They get to pick a date from the first four slot and its saved to the database. Built with React, Chakra UI.",
    githubRepo: "https://github.com/chilara/we_muveee",
    liveSite: "https://we-muveee.vercel.app/",
    image: (
      <img
        src={we_muveee}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "Macaw Consult",
    description:
      "Macaw Consult (website) is a client-centred global logistics provider that is passionate about serving its clients with excellence in meeting their unique needs by providing end-to-end services. Built with React, Chakra UI.",
    githubRepo: "https://github.com/chilara/macaw-consult",
    liveSite: "https://chilara.github.io/macaw-consult/",
    image: (
      <img
        src={macaw}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "Advice Generator App",
    description:
      "This project is centered around API. I implemented data fetching from Advice Slip API. This application gives out over ten million pieces of advice, and this is generated by clicking the dice icon. Built with HTML, CSS and vanilla JavaScript.",
    githubRepo: "https://github.com/chilara/advice-gen-app",
    liveSite: "https://chilara.github.io/advice-gen-app/",
    image: <img src={advice_gen_app} alt="" style={{ height: "100%" }} />,
  },
  {
    title: "REST Countries API",
    description:
      "This Project is basically a website that displays country data. You can also view more detailed information about a particular country. User can also toggle color scheme between light and dark mode. Built with React, styled-components, tailwind, redux, Material UI.",
    githubRepo: "https://github.com/chilara/rest-country-api",
    liveSite: "",
    image: <img src={Rest_countries_API} alt="" style={{ height: "100%" }} />,
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
    <section id="Home">
      <div className={Styles.headerImage}>
        <main>
          <Navbar />
          <Header />
        </main>
      </div>
      <About handleOpen={handleOpen} />
      <div className={Styles.skillsContainer}>
        <SkillsIntro />
        <div className={Styles.SkillsFlex}>
          {skillList.map((items) => (
            <Skills image={items.image} content={items.content} />
          ))}
        </div>
      </div>
      <div className={Styles.ServicesContainer}>
        <ServicesIntro />
        <div className={Styles.ServicesFlex}>
          {ServiceList.map((items) => (
            <Services
              image={items.image}
              heading={items.heading}
              content={items.content}
            />
          ))}
        </div>
      </div>
      <div className={Styles.ProjectIntro}>
        <ProjectIntro />
        {projectLists.map((items, index) => (
          <Projects
            title={items.title}
            description={items.description}
            githubRepo={items.githubRepo}
            liveSite={items.liveSite}
            image={items.image}
            even={index % 2 === 0 ? true : false}
          />
        ))}
      </div>
      <Contact />
      <Footer />
      <Dialog
        onClose={handleClose}
        open={open}
        className={Styles.DialogContainer}
      >
        <div className={Styles.firstCon}>
          <div className={Styles.secondCon}>
            <object data={pdfFile} className={Styles.objectData}>
              My CV
            </object>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Home;
