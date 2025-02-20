import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const Home = () => {
  return (
    <>
      <div className="container-service min-h-screen py-12 px-6 sm:px-12">
        <div className="container flex flex-col lg:flex-row justify-around items-center">
          <div className="home-left text-center lg:text-left lg:max-w-2xl">
            <h3 className="text-purple-500 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide">
              Hello,
            </h3>
            <h2 className="text-purple-500 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
              I am a
            </h2>
            <h1 className="text-purple-500 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide">
              Full Stack Developer
            </h1>
            <p className="text-sm sm:text-base mt-3 font-sans">
              I am a passionate MERN stack developer, skilled in MongoDB,
              Express.js, React, and Node.js. I specialize in creating
              high-performance, scalable web applications with seamless user
              experiences and reliable backends. Committed to continuous
              learning and staying ahead of industry trends, I deliver
              efficient, maintainable solutions that align with business goals.
            </p>
            <div className="butn-grp flex flex-col sm:flex-row gap-4 mt-10">
              <div className="button">
                <button className="bg-purple-500 py-3 px-6 rounded-3xl text-white font-bold">
                  Hire Me!
                </button>
              </div>
              <div className="button">
                <button className="bg-purple-500 py-3 px-6 rounded-3xl text-white font-bold">
                  My Projects
                </button>
              </div>
            </div>
            <div className="social-media-link mt-10 gap-6 mb-8 flex justify-center sm:justify-start">
              <i className="fa-brands fa-2x fa-facebook text-blue-500 pr-5"></i>
              <i className="fa-brands fa-2x fa-linkedin text-blue-500"></i>
            </div>
          </div>
          <div className="home-right mt-10 lg:mt-0">
            <img
              src="main image.png"
              className="hero-img max-w-full max-h-96 object-cover"
              alt="hero"
            />
          </div>
        </div>
      </div>

      {/* My Service Section */}
      <section className="myService bg-slate-500 py-12 px-6 sm:px-12">
        <div className="text-center mb-9">
          <h1 className="font-semibold text-4xl sm:text-5xl text-white mb-6">
            My Service
          </h1>
        </div>
        <div className="cards-List flex flex-wrap justify-center gap-8">
          <div className="card w-full sm:w-80 rounded-lg bg-white shadow-lg p-6">
            <i className="fa-solid fa-code fa-3x flex justify-center mt-4 text-purple-500"></i>
            <h2 className="card-title text-center font-bold text-xl mt-4">
              Custom Web Application Development
            </h2>
            <p className="card-text mt-3 text-sm">
              I specialize in developing custom web applications tailored to
              your unique business requirements, ensuring innovative solutions
              and exceptional user experiences.
            </p>
          </div>
          <div className="card w-full sm:w-80 rounded-lg bg-white shadow-lg p-6">
            <i className="fa-brands fa-connectdevelop fa-3x flex justify-center mt-4 text-purple-500"></i>
            <h2 className="card-title text-center font-bold text-xl mt-4">
              Frontend Development with React
            </h2>
            <p className="card-text mt-3 text-sm">
              I design and implement dynamic, responsive user interfaces using
              React, ensuring a seamless and engaging user experience across all
              devices.
            </p>
          </div>
          <div className="card w-full sm:w-80 rounded-lg bg-white shadow-lg p-6">
            <i className="fa-solid fa-earth-americas fa-3x flex justify-center mt-4 text-purple-500"></i>
            <h2 className="card-title text-center font-bold text-xl mt-4">
              Full-Stack Development (MERN Stack)
            </h2>
            <p className="card-text mt-3 text-sm">
              As a full-stack developer, I provide comprehensive web development
              services, utilizing the MERN stack (MongoDB, Express.js, React,
              Node.js) to build both the frontend and backend of your
              application.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <MySkills />
    </>
  );
};

export default Home;
