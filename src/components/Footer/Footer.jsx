import React from 'react';
import './Footer.css';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  return (
    <footer className="footer__container">
      <SocialIcons color="white" className="footer__icons" />
    </footer>
  )
}

export default Footer;