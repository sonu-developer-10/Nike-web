import React from 'react'

import Logo from "../images/brand_logo.png";

const Navigation = () => {
  return (
    <nav className='container'>
          <div className='logo'>
             <img src={Logo} alt='logo' />
          </div>
          <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li> 
            <li href="#">CONTACT</li>
          </ul>
          <button>Login</button>
       </nav>
  )
}

export default Navigation