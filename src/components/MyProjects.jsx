import React from "react";
import "./Project.css";
import { useState } from "react";

const MyProjects = () => {

  const [activeCategory, setActiveCategory] = useState('all');




  
  
  //defining all project
  const projects = [
   
    {
      id:1,
      category:'mobile',
      image: 'mobile1.jpg',
      title:'Mobile App Development',
      description:'A cross-platform mobile app with real-time notifications, seamless UI/UX, and backend integration for smooth performance.'
    },
    { id:2,
      category:'ui/ux',
      image: 'uiux.jpg',
      title:'UI/UX Designing',
      description:'A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.'
    },
    {
      id:1,
      category:'mobile',
      image: 'mobile1.jpg',
      title:'Mobile App Development',
      description:'A cross-platform mobile app with real-time notifications, seamless UI/UX, and backend integration for smooth performance.'
    },
   
    { id:3,
      category:'web',
      image: 'web1.jpg',
      title:'Web',
      description:'A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.'
    },
    { id:2,
      category:'ui/ux',
      image: 'uiux.jpg',
      title:'UI/UX Designing',
      description:'A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.'
    },
    { id:3,
      category:'web',
      image: 'web1.jpg',
      title:'Web',
      description:'A user-centric UI/UX design focusing on intuitive navigation, responsive layouts, and seamless user interactions for an engaging experience.'
    },
   
  
  ]
  
  const filteredProjects = activeCategory === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeCategory);



  return (
    <>
      <div className="main-container">
        <div className="container mt-16">
          <div className="inner-container">
            <div className="title">
            <h1 className="border-b-4 border-blue-700 text-center text-5xl font-semibold w-[30%] mx-auto pb-4">
                My Projects
              </h1>
            </div>
            <div className="title-text">
              <p className="text-center mt-4 opacity-70">
                Explore my recent work and project that showcase my skills and
                expertise.
              </p>
            </div>

            <div className="project-category mt-10 mb-10">
              <ul className="flex gap-8 justify-center">
                
                <button className={`pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md ${activeCategory ==='all' ? 'bg-blue-600 text-white' : 'border-blue-600'}`} onClick={() => setActiveCategory('all')}>All</button>
                <button className={`pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md ${activeCategory ==='ui/ux' ? 'bg-blue-600 text-white' : 'border-blue-600'}`} onClick={() => setActiveCategory('ui/ux')}>UI/UX</button>
                
                
                <button className={`pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md ${activeCategory ==='web' ? 'bg-blue-600 text-white' : 'border-blue-600'}`} onClick={() => setActiveCategory('web')}>Web</button>
                <button className={`pr-8 pl-8 pt-2 pb-2 border-blue-600 border-2 rounded-md ${activeCategory ==='mobile' ? 'bg-blue-600 text-white' : 'border-blue-600'}`} onClick={() => setActiveCategory('mobile')}>Mobile</button>
                
                
                
                
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container flex gap-10  justify-around flex-wrap ">        
        {filteredProjects.map((project) => (
          <div key={project.id} className="cards flex flex-col flex-wrap">
            <div className="card-img">
              <img src={project.image} alt="" />
            </div>
            <h1 className="card-h">{project.title}</h1>
            <p className="card-p">{project.description}</p>
          </div>
        ))}
      {/* </div> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default MyProjects;
