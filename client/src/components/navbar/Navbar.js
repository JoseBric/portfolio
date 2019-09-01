import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <NavLink exact to="/" className="logo">
        <img className="logo-img" src="/logo.png" alt=""/>
      </NavLink>
      <div className="nav-links">
        <NavLink className="nav-link" activeClassName="active" exact to="/"><i className="fas fa-home"></i></NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/about"><i className="fas fa-user"></i></NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/projects"><i className="fas fa-eye"></i></NavLink>
      </div>
      <div className="contact-links">
        <a className="nav-link" href="https://github.com/JoseBric" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a className="nav-link" href="https://www.linkedin.com/in/jose-brice%C3%B1o-valenzuela-7b5172165/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </nav>  
  )
}
