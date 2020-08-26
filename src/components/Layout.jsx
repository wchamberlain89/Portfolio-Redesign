import React from 'react';
import '../styles/main.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return ( 
    <>
      <Navbar />
      {children}
    </>
   );
}
 
export default Layout;