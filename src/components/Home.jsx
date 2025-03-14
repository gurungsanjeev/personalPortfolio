import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyService from "./MyService";
import LandingPage from "./LandingPage";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <>
      <LandingPage/>

      {/* My Service Section */}
      <MyService/>

      {/* About Me Section */}
      <AboutMe />

      <MyProjects/>

      {/* Skills Section */}
      <MySkills />

      {/* Contact me */}
      <ContactMe/>
    </>
  );
};

export default Home;
