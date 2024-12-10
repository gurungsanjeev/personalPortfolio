import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="container-service h-4/5">
        <div className="container flex justify-around">
          <div className="home-left pl-12">
            <h3 className='text-purple-500 font-bold text-4xl tracking-wide'>Hello,</h3>
            <h2 className='text-purple-500 font-bold text-6xl tracking-wide' >I am a</h2>
            <h1 className='text-purple-500 font-bold text-7xl tracking-wide'>Full Stack Developer</h1>

            <div className="button  mt-16">
              <button className=' bg-purple-500 p-6 rounded-ss-3xl text-white font-bold'>Hire Me!</button>

            </div>
          </div>
          <div className="home-right">
            <img src="main image.png" className='max-h-96' alt="" />
          </div>
        </div>

      </div>
      <section className="myService  bg-slate-500">
        <div className="service-container h-4/5">
          <div className="text">
            <h1 className='justify-center text-center font-semibold text-6xl my-7'>My Service</h1>

          </div>
          <div className="cards-List">
            <div class="card-group">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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