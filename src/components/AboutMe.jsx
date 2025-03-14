import React from "react";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      {/* <section className="about-me bg-white py-12 px-6 sm:px-12" >
        <div className="text-center mb-9">
          <h2 className="font-semibold text-3xl sm:text-4xl text-purple-500 mb-6">About Me</h2>
        </div>
        <div className="aboutMe flex flex-col lg:flex-row justify-center gap-6 items-center lg:items-start">
          <div className="img w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
            <img src="sanjeevv.jpg" alt="About Me" className="object-cover w-full h-full" />
          </div>
          <div className="text w-full sm:w-8/12 text-sm sm:text-base">
            <p>Hello! It's me, Sanjeev Gurung, a passionate and driven MERN Stack Developer with a strong foundation in building dynamic, scalable, and responsive web applications...</p>
            <div className="social-media-link mt-6">
              <h4 className="font-semibold mb-2">Connect With Me!</h4>
              <div className="flex justify-center gap-6">
                <NavLink to="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-2x fa-facebook text-blue-500"></i>
                </NavLink>
                <NavLink to="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-2x fa-linkedin text-blue-500"></i>
                </NavLink>
                <NavLink to="#">
                  <i className="fa-brands fa-square-github fa-2x fa-bounce"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
   */}

      <div className="container h-4/5 mt-10">
        <div className="inner-container">
          <div className="heading">
            <h1 className="border-b-8 border-blue-700 text-center text-5xl font-semibold max-w-full">
              About Me
            </h1>
          </div>
          <div className="head-text mt-4 opacity-70 font-medium">
            <p className="text-center">
              Get to know more about me, my background, and what i do.
            </p>
          </div>
          <div className="body mt-5 ">
            <div className="inner-body flex gap-7">
              <div className="left-side-body max-w-[45%]">
                <div className="image  bg-green-400">
                  <img
                    src="about-me-image2.jpg"
                    alt="image"
                    className="object-cover h-35 rounded-3xl bg-red-500"
                  />
                </div>
              </div>
              <div className="right-side-body max-w-[55%] ">
                <div className="body-text mt-10">
                  <div className="body-heading">
                    <h2 className="text-3xl font-semibold">
                      I'm{" "}
                      <span className="text-blue-700 font-semibold">
                        Sanjeev
                      </span>
                      , a passionate developer and designer
                    </h2>
                  </div>
                  <div className="body-desc mt-6 opacity-65">
                    with over 2 years of experience in web development, I
                    specialize in creating responsive and user-friendly
                    applications. My journey in tech started when I built my
                    first website at the age of 16, and I've been hooked ever
                    since. I hold a Bachelor's degree in Computer Science and
                    have worked with various technologies throughout my career.
                    My approach combines technical expertise with creative
                    problem-solving to deliver exceptional digital experiences.
                  </div>

                  <div className="expertise flex mt-6">
                    <div className="col">
                      <ul className="flex flex-col gap-6">
                        <i class="fa-solid fa-circle-check text-blue-600">Web Development</i>
                        <i class="fa-solid fa-circle-check text-blue-600"> Mobile Development</i>
                        <i class="fa-solid fa-circle-check text-blue-600">UI/UX</i>
                      
                      </ul>
                    </div>
                    <div className="flex flex-col ">
                      <ul>
                      
                      

                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutMe;
