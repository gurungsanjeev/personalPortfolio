// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { NavLink as RouterNavLink } from "react-router-dom"; // Renamed to RouterNavLink
// import { NavLink as ScrollNavLink } from "react-scroll";


// const Navbar = (props) => {
//     return (
//         <>
        

//             <nav className={`flex  bg-${props.mod} text-${props.mod==="light"?"dark":"light"}`}>

//                 <div className="logo "><NavLink to="/" ><h1 className='font-semibold text-2xl'>Sanj<span className='text-blue-700'>eev</span></h1> </NavLink></div>
//                 <ul className='items-center flex gap-5' id='nav'>
//                     <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="" smooth={true} duration={100}>Home</NavLink></li>
//                     <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="about" smooth={true} duration={100}>About</NavLink></li>
//                     <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="projects" smooth={true} duration={100}>Projects</NavLink></li>
//                     <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="skills" smooth={true} duration={100}>Skills</NavLink></li>
//                     <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="getintouch" smooth={true} duration={100}>Contact</NavLink></li>
//                     <div className="form-check form-switch">
//                         <input className="form-check-input" type="checkbox" onClick={props.togglemod} role="switch" id="flexSwitchCheckDefault"/>
//                             <label className={`form-check-label text-${props.mod==="dark"?"light":"dark"}` } htmlFor="flexSwitchCheckDefault">Dark Mode</label>
//                     </div>
//                     <li><NavLink className="bg-blue-600 text-white pr-7 pl-7 pt-2 pb-2 rounded-md flex justify-center align-middle text-center" to="mailto:gurungsanjeev05@gmail.com" >Mail</NavLink></li>
//                 </ul>
//             </nav>
            
        
//         </>
//     )
// }

// export default Navbar




/// chatgpt rephase navbar

import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'; // For routing
import { Link as ScrollNavLink } from "react-scroll"; // For smooth scrolling

const Navbar = (props) => {
    return (
        <>
            <nav className={`flex bg-${props.mod} text-${props.mod === "light" ? "dark" : "light"}`}>
                {/* Logo - Uses RouterNavLink */}
                <div className="logo">
                    <ScrollNavLink to="home" className='cursor-pointer' activeClass="active" >
                        <h1 className='font-semibold text-2xl'>
                            Sanj<span className='text-blue-700'>eev</span>
                        </h1>
                    </ScrollNavLink>
                </div>

                {/* Navigation Links */}
                <ul className='items-center flex gap-5' id='nav'>
                    <li>
                        <ScrollNavLink className='cursor-pointer' activeClass="active" to="home" smooth={true} duration={100} spy={true} offset={-70} >
                            Home
                        </ScrollNavLink>
                    </li>
                    <li>
                        <ScrollNavLink className='cursor-pointer' activeClass="active" to="about" smooth={true} duration={100} spy={true} offset={-70}>
                            About
                        </ScrollNavLink>
                    </li>
                    <li>
                        <ScrollNavLink className='cursor-pointer' activeClass="active" to="projects" smooth={true} duration={100} spy={true} offset={-70}>
                            Projects
                        </ScrollNavLink>
                    </li>
                    {/* <li>
                        <ScrollNavLink className='cursor-pointer' activeClass="active" to="skills" smooth={true} duration={100} spy={true} offset={-70}>
                            Skills
                        </ScrollNavLink>
                    </li> */}
                    <li>
                        <ScrollNavLink className='cursor-pointer' activeClass="active" to="getintouch" smooth={true} duration={100} spy={true} offset={-70}>
                            Contact
                        </ScrollNavLink>
                    </li>

                    {/* Dark Mode Switch */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.togglemod} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mod === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">
                            Dark Mode
                        </label>
                    </div>

                    {/* Mail Button */}
                    <li>
                        <a href="mailto:gurungsanjeev05@gmail.com" className="bg-blue-600 text-white pr-7 pl-7 pt-2 pb-2 rounded-md flex justify-center align-middle text-center">
                            Mail
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;



