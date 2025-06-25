import React from "react";
import "./Project.css";
import { useState } from "react";

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  //defining all project
  const projects = [
    {
      id: 1,
      category: "web",
      image: "mobile1.jpg",
      title: "Resume Builder",
      description:
        "A cross-platform mobile app with real-time notifications, seamless UI/UX, and backend integration for smooth performance.",
    },
    {
      id: 2,
      category: "ui/ux",
      image: "uiux.jpg",
      title: "UI/UX Designing",
      description:
        "A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.",
    },
    {
      id: 3,
      category: "mobile",
      image: "mobile1.jpg",
      title: "Mobile App Development",
      description:
        "A cross-platform mobile app with real-time notifications, seamless UI/UX, and backend integration for smooth performance.",
    },

    {
      id: 4,
      category: "web",
      image: "web1.jpg",
      title: "Web",
      description:
        "A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.",
    },
    {
      id: 5,
      category: "ui/ux",
      image: "uiux.jpg",
      title: "UI/UX Designing",
      description:
        "A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.",
    },
    {
      id: 6,
      category: "web",
      image: "web1.jpg",
      title: "Web",
      description:
        "A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.",
    },
  ];
  /// Ternary operator
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="project-list
      px-0
      md:px-14  ">
        <div className="container 
         mt-5 lg:mt-40">
          <div className="inner-container">
            <div className="title">
              <h1 className="border-b-4 border-blue-700 
              text-center 
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-semibold 
              w-[50%] lg:w-[30%] 
              mx-auto 
              pb-2 sm:pb-2 md:pb-3 lg:pb-4">
                My Projects
              </h1>
            </div>
            <div className="title-text mt-2 sm:mt-4 lg:mt-5">
              <p className="text-center 
              
              text-xs sm:text-base md:text-xl opacity-70">
                Explore my recent work and project that showcase my skills and
                expertise.
              </p>
            </div>

            <div className="project-category
              my-4 sm:my-6 md:my-8 lg:my-10 ">
              <ul className="flex 
              gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center">
                <button
                  className={`
                    px-6 sm:px-3 md:px-6 lg:px-8 
                    py-1 sm:py-2 
                     border-blue-600 
                     border-2 
                     text-xs
                     rounded-md ${activeCategory === "all"
                      ? "bg-blue-600 text-white"
                      : "border-blue-600"
                    }`}
                  onClick={() => setActiveCategory("all")}
                >
                  All
                </button>
                <button
                  className={` px-6 sm:px-3 md:px-6 lg:px-8 
                    py-1 sm:py-2
                     text-xs
                     border-blue-600 
                      border-2 rounded-md ${activeCategory === "ui/ux"
                      ? "bg-blue-600 text-white"
                      : "border-blue-600"
                    }`}
                  onClick={() => setActiveCategory("ui/ux")}
                >
                  UI/UX
                </button>

                <button
                  className={` px-6 sm:px-3 md:px-6 lg:px-8 
                    py-1 sm:py-2
                     text-xs
                     border-blue-600 
                     border-2  rounded-md ${activeCategory === "web"
                      ? "bg-blue-600 text-white"
                      : "border-blue-600"
                    }`}
                  onClick={() => setActiveCategory("web")}
                >
                  Web
                </button>
                <button
                  className={` px-6 sm:px-3 md:px-6 lg:px-8 
                    py-1 sm:py-2
                     text-xs
                     border-blue-600 
                     border-2  rounded-md ${activeCategory === "mobile"
                      ? "bg-blue-600 text-white"
                      : "border-blue-600"
                    }`}
                  onClick={() => setActiveCategory("mobile")}
                >
                  Mobile
                </button>
              </ul>
            </div>
          </div>
        </div>

        {/* w-full md:w-[48%] lg:w-[30%] */}
        {/* ////**********cards design ******************* */}
        <div className="project-container
        flex sm:flex-row md:flex-row flex-wrap 
        lg:justify-center gap-4 sm:gap-6 lg:gap-10 
        sm:justify-around
        justify-around
        bg-green-500
       
        
        "
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cards 
                flex 
                
                min-w[640px]
                lg:w-full
                bg-orange-600
                sm:w-[50%]
                
                shadow-lg rounded-none sm:rounded-lg overflow-hidden
                transition-transform hover:scale-105 duration-300"
            >



              <div className="card-img 
              w-full h-56 
              sm:h-64 lg:h-72 
              overflow-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="p-4 sm:p-5 flex flex-col gap-1">
                <h1 className="card-h text-base font-semibold text-gray-800">
                  {project.title}
                </h1>
                <p className="card-p text-sm text-gray-600">
                  {project.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>



      </div >
    </>
  );
};

export default MyProjects;
