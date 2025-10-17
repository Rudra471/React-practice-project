import React from 'react'

function Navigation() {
  return (
    <nav>
        <div
        className='logo'>
          <img src="/brand_logo.png" alt="logo" />
        </div>
        <div>
          <ul className='nav-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='auth-buttons'>
          <button className='login-btn'>Login</button>
          {/* <button className='signup-btn'>Sign Up</button> */}
        </div>
      </nav>
  )
}

export default Navigation
