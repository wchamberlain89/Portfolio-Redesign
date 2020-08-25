import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.png';
import PageLinks from '../PageLinks';
import Hamburger from '../Hamburger';
import RightNav from '../RightNav';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={Logo} alt="logo"/>
      <PageLinks className="navbar-links" />
      
      <Hamburger>
        {({open}) => (
          <RightNav showing={open}/>    
        )}
      </Hamburger>
    </nav>
  )
}
 
export default Navbar;