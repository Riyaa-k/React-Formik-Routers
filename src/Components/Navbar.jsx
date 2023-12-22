import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navitems">
            <NavLink className="link logo" to="/">Kalvium</NavLink>
            <NavLink className="link about" to="/about">About</NavLink>
            <NavLink className="link login" to="/login">Login</NavLink>
        
        </div>
      
    </div>
  )
}

export default Navbar
