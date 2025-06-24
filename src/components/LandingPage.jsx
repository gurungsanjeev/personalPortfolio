import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div
        className="contaner flex  
      pr-3 pl-3
      md:pr-14 md:pl-14 "
      >
        <div className="left w-2/4 ">
          <span
            className="
          pr-4 pl-4 pt-1 pb-1
           bg-slate-300 text-blue-600 
           font-semibold rounded-3xl 
            text-xs sm:text-sm"
          >
            Available for work
          </span>
          <div
            className=" 
          text-lg 
          md:text-3xl 
          lg:text-5xl 
         mt-4 sm:mt-10"
          >
            <h1 className="font-bold">
              Hi, I'm{" "}
              <span className="text-blue-600 font-semibold">
                Sanjeev Gurung
              </span>
            </h1>
            <p
              className="
               text-xs
               md:text-2xl
               md:mt-4 lg:mt-8 
               opacity-60"
            >
              I build exceptional digital experiences that are fast, accessible,
              visually appealing and responsive. Let's create something amazing
              together.
            </p>

            <div className="hidden sm:block">

              <div className="  flex gap-4 mt-6 absolute">
                <p
                  className=" 
                text-xs sm:text-sm md:text-lg 
                px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 
                rounded-lg
                bg-blue-600 text-white"
                >
                  View My Work
                </p>
                <p className="
                 text-xs sm:text-sm md:text-lg 
                 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 
                 
                 rounded-lg 
                 border-2 
                 text-black border-blue-100">
                  <NavLink to="mailto:gurungsanjeev05@gmail.com">
                    Contact Me
                  </NavLink>
                </p>
              </div>
            </div>
            <div className="hidden sm:block">

              <div className="social-media 
              sm:text-3xl md:text-5xl flex relative 
                  gap-4 
                  mt-20 md:mt-29 lg:mt-32
                  ">
                <a
                  href="https://www.linkedin.com/in/sanjeev-gurung/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
            {/* bottom-0 absolute pb-4 */}

          </div>
        </div>
        <div className="right w-2/4 ">
          <img
            src="sanjeevv.jpg"
            alt=""
            className="w-10/12 h-auto float-right object-cover border-transparent rounded-lg "
          />
        </div>
      </div>


      {/* //// hides when sm 640px hits screen */}
      <section className="block sm:hidden mt-2 px-2">

        <div className="flex  justify-between items-center gap-4 ">
          <div className="action flex gap-4  items-center ">
            <NavLink className="
            text-xs sm:text-sm md:text-lg 
            px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 
            rounded-lg bg-blue-600 text-white">
              View My Work
            </NavLink>
            <NavLink
              to="mailto:gurungsanjeev05@gmail.com"
              className="text-xs sm:text-sm md:text-lg 
            px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 
            rounded-lg border-2 text-black border-blue-100 items-center"
            >
              Contact Me
            </NavLink>
          </div>

          <div className="social-media flex gap-4 text-3xl">
            <a
              href="https://www.linkedin.com/in/sanjeev-gurung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </section>

    </>
  );
};

export default LandingPage;
