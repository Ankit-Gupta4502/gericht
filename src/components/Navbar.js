import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-wrapper">
        <div className="nav-links-wrapper">
          <div className="hamburger-container">
            <span className="dash-1"></span>
            <span className="dash-2"></span>
          </div>
          <a href="/" className='menu-link'>Menu</a>
          <div className="social-icons-container">
            <a href="" className='icons'>
              <FiFacebook />
            </a>
            <a href="/" className="icon">
              <FiTwitter />
            </a>
            <a href="" className='icon'>
              <FiInstagram />
            </a>
          </div>
        </div>
        <h3 className="logo">Gerícht</h3>

        <div className="navbar-login-container">
          <a href="" className='login-link'>Log in / registration</a>
          <a href="" className='link'>Book Table</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar