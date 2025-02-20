import React from 'react'
import { NavLink } from 'react-router-dom'


const AboutMe = () => {
  return (
  <>
   <section className="about-me bg-white py-12 px-6 sm:px-12" >
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
  
  </>
  )
}

export default AboutMe
