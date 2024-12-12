import React from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container-service h-4/5">
        <div className="container flex justify-around">
          <div className="home-left pl-12 max-w-2xl">
            <h3 className='text-purple-500 font-bold text-4xl tracking-wide'>Hello,</h3>
            <h2 className='text-purple-500 font-bold text-5xl tracking-wide' >I am a</h2>
            <h1 className='text-purple-500 font-bold text-6xl tracking-wide'>Full Stack Developer</h1>
            <p className='text-sm mt-3 font-sans '>I am a passionate MERN stack developer, skilled in MongoDB, Express.js, React, and Node.js. I specialize in creating high-performance, scalable web applications with seamless user experiences and reliable backends. Committed to continuous learning and staying ahead of industry trends, I deliver efficient, maintainable solutions that align with business goals.</p>
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
            <img src="main image.png" className='hero-img max-h-96' alt="" />


          </div>
        </div>

      </div>

      {/* this is the My service section */}
      <section className="myService  bg-slate-500">
        <div className="service-container h-30">
          <div className="text pt-1">
            <h1 className='justify-center text-center font-semibold text-6xl mb-9 py-3 '>My Service</h1>

          </div>
          <div className="cards-List">
            <div className="card-group flex flex-wrap">
              <div className="card min-w-50 rounded-lg">
                <i class="fa-solid fa-code fa-3x flex justify-center mt-4"></i>
                <div className="card-body">
                  <h2 className="card-title flex justify-center text-center font-bold text-xl">Custom Web Application Development</h2>
                  <p className="card-text text-justify">I specialize in developing custom web applications tailored to your unique business requirements, ensuring innovative solutions and exceptional user experiences.By leveraging the latest technologies, I deliver secure, scalable, and high-performance web applications that meet the demands of modern users.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card min-w-50">
                <i class="fa-brands fa-connectdevelop fa-3x flex justify-center mt-4"></i>
                <div className="card-body">
                  <h2 className="card-title flex justify-center font-bold text-center text-xl">Frontend Development with React</h2>
                  <p className="card-text text-justify">I design and implement dynamic, responsive user interfaces using React, ensuring a seamless and engaging user experience across all devices.Utilizing React’s component-based architecture, I create scalable and maintainable frontend solutions that provide optimal performance and flexibility.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card min-w-50">
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
      <section>
        <div className="container">
          <div className="about-me-title">
            <h2 className='font-semibold justify-center flex text-3xl mb-5 mt-4 text-purple-500'>About Me</h2>
          </div>
          <div className="aboutMe flex justify-center border-2 border-purple-500 gap-5 p-10">
            <div className="img ">
              <img  src="sanjeevv.jpg" alt="" className='h-72 abt-img' />
            </div>
            <div className="text w-6/12">
              <p className='justify-center text-justify flex'>
                Hello! it's me Sanjeev Gurung, a passionate and driven MERN Stack Developer with a strong foundation in building dynamic, scalable, and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in creating full-stack applications that deliver seamless user experiences and high-performance solutions.
                <br />

                I am continuously expanding my skill set and keeping up-to-date with the latest web technologies to ensure that I deliver the most innovative and efficient solutions to my clients. Whether it’s developing a new project from the ground up or improving an existing one, my goal is always to build user-centric, high-quality applications.
                <br />

                When I’m not coding, you can find me learning new technologies, collaborating with fellow developers, and solving complex problems. I’m passionate about turning ideas into reality and creating applications that drive impact and help businesses succeed.

                Let’s connect and build something amazing together!
              </p>
              <div className="social-media-link mt-10 gap-6 mb-8  ">
              <h4 className='mb-2 font-semibold'>Connect With me!</h4>
              <div className="socialM flex">

              <NavLink to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-2x fa-facebook text-blue-500 pr-5" /></NavLink>
              <NavLink to="https://www.instagram.com/" target='_blank'><i class="fa-brands fa-2x fa-linkedin text-blue-500" /></NavLink>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* This is my skills section  */}
      <section className='skill-section'>
        <div className="sill-section h-30 ">
          <div className="skill-heading h-50">

            <h1 className='text-center p-10 text-3xl font-semibold'>My Skills</h1>
          </div>
          <div className="skill-innerContainer flex gap-12 justify-center align-middle">
            <div className="image-container" >
              <img src="sanjeevv.jpg" alt="" className='h-72' />
            </div>
            <div className="text-container ">
              <h2 className='text-center font-semibold'>Skills</h2>

              <div className="skill-list flex gap-6 items-center mt-3">
                <progress className='bg-slate-300 rounded-sm h-2 w-auto' max="100" value="85"></progress>
                <label htmlFor="">Html</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="80"></progress>
                <label htmlFor="">Css</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="90"></progress>
                <label htmlFor="">Js</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="85"></progress>
                <label htmlFor="">React</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="80"></progress>
                <label htmlFor="">MongoDB</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="90"></progress>
                <label htmlFor="">Express Js</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="95"></progress>
                <label htmlFor="">Node Js</label>

              </div>
              <div className="skill-list flex gap-6 items-center mt-2">
                <progress className='bg-slate-300 rounded-sm h-2' max="100" value="40"></progress>
                <label htmlFor="">UI/UX</label>

              </div>
            </div>
          </div>
          <p className='text-center mt-4'><b><i>The moment you believe you are fully skilled is the moment you stop growing—true mastery is realizing there’s always more to learn.</i></b></p>

        </div>
      </section>






    </>
  )
}

export default Home