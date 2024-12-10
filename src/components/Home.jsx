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
                <button className=' bg-purple-500 p-6 rounded-se-3xl text-white font-bold'>See my projects</button>

              </div>
            </div>
            {/* this is the homepage social media link  */}
            <div className="social-media-link mt-10">
              <i className="fa-brands fa-facebook text-blue-500"></i>
            </div>
          </div>
          <div className="home-right">
            <img src="main image.png" className='max-h-96' alt="" />
          </div>
        </div>

      </div>

      {/* this is the My service section */}
      <section className="myService  bg-slate-500">
        <div className="service-container h-4/5">
          <div className="text">
            <h1 className='justify-center text-center font-semibold text-6xl my-7'>My Service</h1>

          </div>
          <div className="cards-List">
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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