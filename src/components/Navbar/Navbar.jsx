import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.png';
import PageLinks from '../PageLinks';
import Hamburger from '../Hamburger';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={Logo} alt="logo"/>
      <PageLinks className="navbar-links" />
      
      <Hamburger>
        
      </Hamburger>
    </nav>
  )
}
 
export default Navbar;