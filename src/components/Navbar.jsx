import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className={`flex items-center justify-between p-4 bg-${props.mod} text-${props.mod === "light" ? "dark" : "light"}`}>
            {/* Logo */}
            <div className="logo">
                <NavLink to="">
                    <h1 className="font-semibold text-xl">Sanjeev</h1>
                </NavLink>
            </div>

            {/* Hamburger Icon for mobile view */}
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                <i className={`fa ${isMobile ? 'fa-times' : 'fa-bars'} text-2xl`} />
            </div>

            {/* Menu */}
            <ul className={`lg:flex gap-6 p-4 lg:p-0 lg:bg-transparent ${isMobile ? 'flex-col absolute top-16 left-0 w-full bg-gray-100' : 'hidden lg:flex'}`}>
                <li><NavLink className={(e) => e.isActive ? "active" : ""} to="">Home</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "active" : ""} to="about">About</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "active" : ""} to="contact">Contact</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "active" : ""} to="projects">Projects</NavLink></li>
                <li><NavLink className={(e) => e.isActive ? "active" : ""} to="Blogs">Blogs</NavLink></li>
                
                {/* Dark Mode Switch */}
                <div className="form-check form-switch mt-2 lg:mt-0">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        onClick={props.togglemod} 
                        role="switch" 
                        id="flexSwitchCheckDefault" 
                    />
                    <label 
                        className={`form-check-label text-${props.mod === "dark" ? "light" : "dark"}`} 
                        htmlFor="flexSwitchCheckDefault">
                        Dark Mode
                    </label>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
