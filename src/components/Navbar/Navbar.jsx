import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.png';
import PageLinks from '../PageLinks';
import Hamburger from '../Hamburger';
import RightNav from '../RightNav';
import PageContainer from '../PageContainer';

const Navbar = () => {
  return ( 
    <PageContainer>
      <nav className="navbar">
        <img src={Logo} alt="logo"/>
        <PageLinks className="navbar-links" />
        
        <Hamburger>
          {({open}) => (
            <RightNav showing={open}/>    
          )}
        </Hamburger>
      </nav>
    </PageContainer>
  )
}
 
export default Navbar;