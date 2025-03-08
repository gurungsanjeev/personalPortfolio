import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get the current year
  return (
    <>
      <div className="footer-details col-span-3 flex h-60 justify-around mt-10">
        <div className="details">
        <h2 className="font-semibold text-3xl mb-3"><span className="text-blue-600 ">Sanj</span>eev</h2>
          <p>
            Crafting Scalable web solutions with the power of the MERN Stack
          </p>
          <div className="social-media flex mt-6 gap-4">
          <NavLink><i class="fa-brands fa-linkedin fa-2xl"></i></NavLink>
          <NavLink><i className="fa-brands fa-github fa-2xl" ></i></NavLink>
          </div>
         
        </div>
        <div className="quick-link block">
          <h2 className="font-semibold text-3xl mb-3">Quick <span className="text-blue-600">links</span></h2>
          <ul>
            <li className=" mb-2"><NavLink to="">Home</NavLink></li>
            <li className=" mb-2"><NavLink to="">About</NavLink></li>
            <li className=" mb-2"><NavLink to="">Projects</NavLink></li>
            <li className=" mb-2"><NavLink to="">Skills</NavLink></li>
            <li className=" mb-2"><NavLink to="">Contact</NavLink></li>
          </ul>
        </div>
        <div className="contact">
          <h2 className="font-semibold text-3xl mb-3"><span className="text-blue-600">C</span>ontacts</h2>
          <p className=" mb-2">Kathmandu, Nepal</p>
          <span className="mb-2">
            <NavLink to="mailto:gurungsanjeev05@gmail.com">
              gurungsanjeev05@gmail.com
            </NavLink>
          </span>
          <p className=" mb-2">+977 9843736785</p>
        </div>
      </div>
      <hr />
      <div className="copyright-section h-20">
        <p className="  text-center py-2 bottom-0 justify-center font-medium text-xl ">
          &copy; Copyright under sanjeev || {currentYear} made using{" "}
          <i class="fa-brands fa-react fa-spin"></i>
        </p>
      </div>
    </>
  );
};

export default Footer;
