import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* <div className="container-service min-h-screen py-12 px-6 sm:px-12">
        <div className="container flex flex-col-reverse lg:flex-row justify-around items-center">
          <div className="home-left text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-purple-500 font-bold text-5xl pb-7 sm:text-6xl md:text-7xl lg:text-8xl tracking-wide">
              Full Stack Developer
            </h1>
            <p className="text-sm sm:text-base mt-3 font-sans">
              Crafting Scalable Web Solutions with the Power of MERN Stack
            </p>

            <div className="butn-grp flex flex-col sm:flex-row gap-4 mt-10 justify-center">
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
              
                <i className="fa-brands fa-2x fa-facebook text-blue-500 pr-5 "></i>
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
      </div> */}

      <div className="contaner flex  pr-14 pl-14">
        <div className="left w-2/4 ">
          <span className="pr-4 pl-4 pt-1 pb-1 bg-slate-300  text-blue-600 font-semibold rounded-3xl text-sm">
            Available for work
          </span>
          <div className="text text-5xl mt-10">
            <h1 className="font-bold">
              Hi, I'm <span className="text-blue-600 font-semibold">
                 Sanjeev Gurung
              </span>
            </h1>
            <p className="text-2xl mt-8 opacity-60">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing and responsive. Let's create something amazing
              together.
            </p>
            <div className="action flex gap-4 mt-6 absolute">
              <p className="text-lg pr-6 pl-6 pt-2 pb-2 rounded-lg bg-blue-600 text-white">
                View My Work <i className="fa-light fa-arrow-right"></i>
              </p>
              <p className="text-lg pr-6 pl-6 pt-2 pb-2 rounded-lg border-2 text-black border-blue-100">
                <NavLink to="">Contact Me</NavLink>
              </p>
            </div>
            <div className="social-media flex gap-4 bottom-0 absolute pb-4">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github" ></i>
            </div>
          </div>
        </div>
        <div className="right w-2/4 ">
          <img src="sanjeevv.jpg" alt="" className="w-10/12 h-auto float-right object-cover " />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
