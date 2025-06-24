import React from "react";
import { Suspense } from "react";


// / This is the static way to declare
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import MyProjects from "./MyProjects";
// import MySkills from "./MySkills"
import GetInTouch from "./Footer/GetInTouch";


const Home = () => {
  return (
    <>

      {/* Create a single page scrollable website */}
      <section id="home">

        <LandingPage />
      </section>


      {/* About section */}
      <section id="about">

        <AboutMe />
      </section>


      {/* Project section  */}
      <section id="projects">
        <MyProjects />
      </section>

      {/* Project section  */}
      {/* <section id="projects">
        <MySkills />
      </section> */}

      {/* getintouch section */}
      <section id="getintouch">

        <GetInTouch />
      </section>





    </>
  );
};

export default Home;
