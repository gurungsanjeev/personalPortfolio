import React from 'react'

const MySkills = () => {
  return (
    <>
      <section className="skill-section bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-8 sm:px-12 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl mb-6">My Skills</h1>
          <p className="text-white text-lg">A quick overview of my expertise</p>
        </div>

        <div className="skill-innerContainer flex flex-col sm:flex-row gap-16 justify-center items-center">
          {/* Image Container */}
          <div className="image-container w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transform transition-all">
            <img src="sanjeevv.jpg" alt="Skills" className="object-cover w-full h-full" />
          </div>

          {/* Skills List */}
          <div className="text-container w-full sm:w-8/12 text-sm sm:text-base space-y-6">
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">HTML</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="85"></progress>
              <span className="text-white font-medium">85%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">CSS</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="90"></progress>
              <span className="text-white font-medium">90%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">JavaScript</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="90"></progress>
              <span className="text-white font-medium">90%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">React</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="85"></progress>
              <span className="text-white font-medium">85%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">MongoDB</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="80"></progress>
              <span className="text-white font-medium">80%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">Express.js</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="90"></progress>
              <span className="text-white font-medium">90%</span>
            </div>
            <div className="skill-item flex items-center justify-between">
              <span className="text-white font-medium">Node.js</span>
              <progress className="bg-gray-300 rounded-full w-3/4 h-3" max="100" value="95"></progress>
              <span className="text-white font-medium">95%</span>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-white text-lg italic">
          <b>The moment you believe you are fully skilled is the moment you stop growing—true mastery is realizing there’s always more to learn.</b>
        </p>
      </section>
    </>
  )
}

export default MySkills
