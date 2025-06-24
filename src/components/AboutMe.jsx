import React from "react";
import { NavLink } from "react-router-dom";


const AboutMe = () => {
  return (
    <>


      <div className="container 
      h-4/5 
      sm: my-20 md:my-40 
      sm: pl-6 md:pl-14">
        <div className="inner-container">
          <div className="heading">
            <h1 className="border-b-4
             border-blue-700 
             text-center 
             text-xl sm:text-3xl md:text-5xl
             font-semibold 
            w-[30%] md:w-[40%] 
             mx-auto 
             bg-green-400
            pb-1 sm:pb-2 md:pb-4">
              About Me
            </h1>
          </div>
          <div className="head-text mt-4 opacity-70 font-medium">
            <p className="text-center">
              Get to know more about me, my background, and what i do.
            </p>
          </div>
          <div className="body mt-5 ">
            <div className="inner-body flex gap-7">
              <div className="left-side-body max-w-[50%]">
                <div className="image ">
                  <img
                    src="about-me-image.jpg"
                    alt="image"
                    className="object-cover
                     h-full md:h-2/5
                     shadow-md shadow-black 
                     w-full 
                     rounded-3xl "
                  />
                </div>
              </div>
              <div className="right-side-body w-[55%] ">
                <div className="body-text  sm:mt-1 md:mt-4">
                  <div className="body-heading">
                    <h2 className="
                    text-sm
                    sm:text-2xl md:text-3xl 
                    font-semibold">
                      I'm {''}

                      <span className="text-blue-700 font-semibold">
                        Sanjeev
                      </span>
                      , a passionate developer and designer
                    </h2>
                  </div>
                  <div className="hidden sm:block">

                    <div className="body-desc
                      sm:mt-2  md:mt-4 opacity-65
                      text-xs md:text-sm">
                      with over 2 years of experience in web development, I
                      specialize in creating responsive and user-friendly
                      applications. My journey in tech started when I built my
                      first website at the age of 16, and I've been hooked ever
                      since. I hold a Bachelor's degree in Computer Science and
                      have worked with various technologies throughout my career.
                      My approach combines technical expertise with creative
                      problem-solving to deliver exceptional digital experiences.
                    </div>
                  </div>

                  <div className="expertise flex 
                  text-[8px] md:text-xl
                  
                   mt-4 ">
                    <div className="col">

                      <ul className="flex 
                      gap-2 ">
                        <span className="font-semibold"> Expertise:</span>
                        <img src="language/html.svg" alt="" srcset="" className="h-12" />
                        <img src="language/css.svg" alt="" srcset="" className="h-12" />
                        <img src="language/react.svg" alt="" srcset="" className="h-12" />
                        <img src="language/figma.svg" alt="" srcset="" className="h-12" />
                        {/* <i class="fa-solid fa-circle-check text-blue-600"><strong className="ml-3">FrontEnd Development</strong></i>
                        <i class="fa-solid fa-circle-check text-blue-600"><strong className="ml-3">BackEnd Development</strong></i>
                        <i class="fa-solid fa-circle-check text-blue-600"><strong className="ml-3">UI/UX</strong></i> */}
                        {/* <i class="fa-solid fa-circle-check text-blue-600"><strong className="ml-3">UI/UX</strong></i> */}

                      </ul>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>



          <div className="block sm:hidden">

            <div className="body-desc
            
            mt-4
            opacity-65
            text-sm 
            "
            >
              with over 2 years of experience in web development, I
              specialize in creating responsive and user-friendly
              applications. My journey in tech started when I built my
              first website at the age of 16, and I've been hooked ever
              since. I hold a Bachelor's degree in Computer Science and
              have worked with various technologies throughout my career.
              My approach combines technical expertise with creative
              problem-solving to deliver exceptional digital experiences.
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMe;
