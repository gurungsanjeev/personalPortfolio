import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="container-service h-4/5">
        <div className="container flex justify-around">
          <div className="home-left pl-12 max-w-2xl">
            <h3 className='text-purple-500 font-bold text-4xl tracking-wide'>Hello,</h3>
            <h2 className='text-purple-500 font-bold text-5xl tracking-wide' >I am a</h2>
            <h1 className='text-purple-500 font-bold text-6xl tracking-wide'>Full Stack Developer</h1>
            <p className='text-sm mt-1 font-sans'>I am a passionate MERN stack developer, skilled in MongoDB, Express.js, React, and Node.js. I specialize in creating high-performance, scalable web applications with seamless user experiences and reliable backends. Committed to continuous learning and staying ahead of industry trends, I deliver efficient, maintainable solutions that align with business goals.</p>
            <div className="butn-grp flex gap-4">
              <div className="button  mt-10">
                <button className=' bg-purple-500 p-6 rounded-ss-3xl text-white font-bold'>Hire Me!</button>

              </div>
              <div className="button  mt-10">
                <button className=' bg-purple-500 p-6 rounded-se-3xl text-white font-bold'>My projects</button>

              </div>
            </div>
            {/* this is the homepage social media link  */}
            <div className="social-media-link mt-10 gap-6 mb-8">
              <i className="fa-brands fa-2x fa-facebook text-blue-500 pr-5"></i>
              <i class="fa-brands fa-2x fa-linkedin text-blue-500"></i>
            </div>
          </div>
          <div className="home-right">
            <img  src="main image.png" className='hero-img max-h-96' alt="" />

       
          </div>
        </div>

      </div>

      {/* this is the My service section */}
      <section className="myService  bg-slate-500">
        <div className="service-container h-30">
          <div className="text pt-1">
            <h1 className='justify-center text-center font-semibold text-6xl my-7'>My Service</h1>

          </div>
          <div className="cards-List">
            <div className="card-group">
              <div className="card">
              <i class="fa-solid fa-code fa-3x flex justify-center mt-4"></i>
                <div className="card-body">
                  <h2 className="card-title flex justify-center text-center font-bold text-xl">Custom Web Application Development</h2>
                  <p className="card-text text-justify">I specialize in developing custom web applications tailored to your unique business requirements, ensuring innovative solutions and exceptional user experiences.By leveraging the latest technologies, I deliver secure, scalable, and high-performance web applications that meet the demands of modern users.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
              <i class="fa-brands fa-connectdevelop fa-3x flex justify-center mt-4"></i>
                <div className="card-body">
                  <h2 className="card-title flex justify-center font-bold text-center text-xl">Frontend Development with React</h2>
                  <p className="card-text text-justify">I design and implement dynamic, responsive user interfaces using React, ensuring a seamless and engaging user experience across all devices.Utilizing React’s component-based architecture, I create scalable and maintainable frontend solutions that provide optimal performance and flexibility.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
              <i class="fa-solid fa-earth-americas fa-3x flex justify-center mt-4" ></i>
                <div className="card-body">
                  <h2 className="card-title flex justify-center font-bold text-center text-xl">Full-Stack Development (MERN Stack)</h2>
                  <p className="card-text text-justify">As a full-stack developer, I provide comprehensive web development services, utilizing the MERN stack (MongoDB, Express.js, React, Node.js) to build both the frontend and backend of your application.I ensure smooth integration between the client and server sides, creating scalable, secure, and high-performing web applications.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}

export default Home