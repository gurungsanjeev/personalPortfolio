import React from "react";
import "./Project.css";

const MyProjects = () => {
  return (
    <>
      <div className="main-container">
        <div className="container mt-16">
          <div className="inner-container">
            <div className="title">
              <h1 className="text-4xl font-semibold text-center">
                My Projects
              </h1>
            </div>
            <div className="title-text">
              <p className="text-center mt-5 opacity-70">
                Explore my recent work and project that showcase my skills and
                expertise.
              </p>
            </div>

            <div className="project-category mt-10 mb-10">
              <ul className="flex gap-8 justify-center">
                <li className="pr-8 pl-8 pt-2 pb-2 bg-blue-800 text-white rounded-md">
                  All
                </li>
                <li className="pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md">
                  Web
                </li>
                <li className="pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md">
                  Mobile
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container flex gap-10 ">
          <div className="cards bg-orange-400 max-w-[33%]">
            <div className="card-img">
              <img src="web.jpg" alt="web development" />
            </div>
            <h1>E-commerce Platform</h1>
            <p>A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.</p>
          </div>
          <div className="cards bg-orange-400 max-w-[30%]">
            <div className="card-img">
              <img src="mobile.jpg" alt="Mobile development" />
            </div>
            <h1>Mobile Development</h1>
            <p></p>
          </div>
          <div className="cards bg-orange-400 max-w-[30%]">
            <div className="card-img">
              <img src="ux.jpg" alt="Ui/Ux" />
            </div>
            <h1>UI/UX Designing</h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
