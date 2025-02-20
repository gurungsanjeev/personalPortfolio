import React from 'react'

const MyService = () => {
  return (
   <>
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

   </>
  )
}

export default MyService
