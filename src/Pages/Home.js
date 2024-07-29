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
import ipAddress from "../Assets/ipAddress.jpg";
import sneakers from "../Assets/sneakers.jpg";
import go from "../Assets/go.png";
import todo_app from "../Assets/todo-app.png";
import Rest_countries_API from "../Assets/Rest_countries_API.png";
import techpros from "../Assets/techpros.png";
import pruvia from "../Assets/pruvia.png";
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
    content: "NEXT.JS",
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
    title: "Pruvia (admin)",
    description:
      "Pruvia is a community driven platform designed to make peer to peer lending accessible, secure and rewarding. It is a platform that is bent to meet all your financial obligations and provide you with profitable platforms that supports the growth of your business and meeting your urgent needs.",
    githubRepo: "https://bitbucket.org/javaplus-workspace/pruvia-p2p-admin-fe/src/main/",
    liveSite: "https://pruvia-p2p-admin-fe-x2cj.vercel.app/",
    image: (
      <img
        src={pruvia}
        alt=""
        style={{
          height: "70%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "TechProsNaija",
    description:
      "This website connects you to the landing-page of an EduTech organization who is set to provide technical and non-technical courses online via a Learning management system. Built with React, Tailwind CSS, RESTFUL APIs.",
    githubRepo: "https://github.com/Techprossng/Techprossng-website",
    liveSite: "https://techprosnaija.com/",
    image: (
      <img
        src={techpros}
        alt=""
        style={{
          height: "70%",
          width: "90%",
        }}
      />
    ),
  },
  {
    title: "IP Address Tracker",
    description:
      "This is an IP address tracker web app where users can input an IP address and then retrieve and display information about that IP address, such as its location on a map, the associated country, city, ISP (Internet Service Provider). Built with React.js, Chakra UI, RESTFUL APIs and React Leaflet.js",
    githubRepo: "https://github.com/chilara/IP_address_tracker",
    liveSite: "https://ip-address-tracker-chisom-oguine.vercel.app/",
    image: (
      <img
        src={ipAddress}
        alt=""
        style={{
          height: "60%",
          width: "90%",
        }}
      />
    ),
  },

  {
    title: "Go Dashboard",
    description:
      "This is basically the dashboard for Go, where client can manage the users and their respective roles. Client get to implement CRUD (Create, Read, Update, Delete) functionality for a user. Built with Next.js, Tailwind CSS, Shad cn UI, Axios, Modular programming.",
    githubRepo: "https://github.com/chilara/assessment-voyatek",
    liveSite: "https://assessment-voyatek-chisom.vercel.app/",
    image: (
      <img
        src={go}
        alt=""
        style={{
          height: "70%",
          width: "90%",
        }}
      />
    ),
  },

  {
    title: "My Todo-App",
    description:
      "This is a simple Todo List application where users can add, edit, delete and mark tasks as complete. Built with React, Typescript, Tailwind CSS, Redux toolkit.",
    githubRepo: "https://github.com/chilara/my-todo-app",
    liveSite: "https://my-todo-app-2024.vercel.app/",
    image: (
      <img
        src={todo_app}
        alt=""
        style={{
          height: "65%",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Rest Country API",
    description:
      "This is a product integrated with the REST Countries API to pull country data and display it. Users can click on a country to see more detailed information about that country and its border countries. Users can also toggle the color scheme between light and dark mode. Built with React, CSS, Redux, RESTFUL APIs, MAterial UI.",
    githubRepo: "https://github.com/chilara/api-rest-country",
    liveSite: "https://api-rest-country.vercel.app/",
    image: (
      <img
        src={Rest_countries_API}
        alt=""
        style={{
          height: "80%",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Sneakers Shop",
    description:
      "This is an e-commerce webapp, where users can view list of products, add items to the cart, view the cart and remove items from it. Built with React, Chakra UI, React router DOM, Redux.",
    githubRepo: "https://github.com/chilara/sneakers_shop",
    liveSite: "https://sneakers-shop-chisom.vercel.app/",
    image: <img src={sneakers} alt="" style={{ height: "100%" }} />,
  },
 

  {
    title: "Advice Generator App",
    description:
      "This project is centered around API. I implemented data fetching from Advice Slip API. This application gives out over ten million pieces of advice, and this is generated by clicking the dice icon. Built with HTML, CSS and vanilla JavaScript.",
    githubRepo: "https://github.com/chilara/advice-gen-app",
    liveSite: "https://chilara.github.io/advice-gen-app/",
    image: <img src={advice_gen_app} alt="" style={{ height: "100%" }} />,
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
          {skillList.map((items, index) => (
            <Skills key={index} image={items.image} content={items.content} />
          ))}
        </div>
      </div>
      <div className={Styles.ServicesContainer}>
        <ServicesIntro />
        <div className={Styles.ServicesFlex}>
          {ServiceList.map((items, index) => (
            <Services
            key={index}
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
