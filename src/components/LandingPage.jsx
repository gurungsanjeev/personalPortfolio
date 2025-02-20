import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="container-service min-h-screen py-12 px-6 sm:px-12">
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
      </div>
    </>
  );
};

export default LandingPage;
