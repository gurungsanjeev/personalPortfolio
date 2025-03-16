import React from "react";


const GetInTouch = () => {
  return (
    <>
      <div className="container my-20">
        <div className="innercontainer">
          <div className="Heading">
            <h1 className="text-center text-3xl w-[30%] mb-7 pb-4 border-blue-700 border-b-4 font-semibold mx-auto">
              Get In Touch
            </h1>
          </div>
          <div className="heading-text ">
            <p className="text-center ">
              Have a project in mind or want to collaborte? Feel free to reach
              out!!
            </p>
          </div>

          <div className="contact-section flex flex-col md:flex-row justify-around items-center  py-5">
            {/* Form Section */}
            <div className="form border-2 p-5 w-full md:w-[70%] mx-5 shadow-md rounded-md ">
              <form action="" className="space-y-6">
                {/* Name & Email (Responsive for small screens) */}
                <div className="mandatory-details flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="name" className="block font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="example@.com"
                      required
                      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                
                <div className="w-full">
                  <label htmlFor="subject" className="block font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                
                <div className="w-full">
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

               
                <div className="w-full flex justify-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details Section */}
            <div className="right-side w-full md:w-[30%] ">
              <div className="contact-details w-full   p-3   mb-10  rounded-md shadow-md">
                <div className="location-details flex ">
                <div className="max-w-[30%] mr-5">
                    <div className="contact-logo bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center">
                      <i class="fa-solid fa-envelope " ></i>
                    </div>
                  </div>
                  <div className="details font-semibold">
                    <label htmlFor="location">Email</label>
                    <p>gurungsanjeev05@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-details w-full   p-3   mb-10  rounded-md shadow-md">
                <div className="location-details flex ">
                <div className="max-w-[30%] mr-5">
                    <div className="contact-logo bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div className="details font-semibold">
                    <label htmlFor="location">Phone</label>
                    <p>+977 9812345678</p>
                  </div>
                </div>
              </div>

              {/* location details */}
              <div className="contact-details w-full  p-3   mt-10 md:mt-0 rounded-md shadow-md">
                <div className="location-details flex ">
                  <div className="max-w-[30%] mr-5">
                    <div className="contact-logo bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center">
                      <i class="fa-solid fa-location-dot"> </i>
                    </div>
                  </div>
                  <div className="details font-semibold">
                    <label htmlFor="location">Location</label>
                    <p> Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
