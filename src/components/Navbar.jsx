import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <>
        

            <nav className={`flex  bg-${props.mod} text-${props.mod==="light"?"dark":"light"}`}>

                <div className="logo "><NavLink  to="" ><h1 className='font-semibold text-2xl'>Sanj<span className='text-black'>eev</span></h1> </NavLink></div>
                <ul className='items-center flex gap-5'>
                    <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="">Home</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="about">About</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="projects">Projects</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="skills">Skills</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="contact">Contact</NavLink></li>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.togglemod} role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mod==="dark"?"light":"dark"}` } htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    <li><NavLink className="bg-blue-600 text-white pr-7 pl-7 pt-2 pb-2 rounded-md flex justify-center align-middle text-center" to="mailto:gurungsanjeev05@gmail.com" >Mail</NavLink></li>
                </ul>
            </nav>
            
        
        </>
    )
}

export default Navbar