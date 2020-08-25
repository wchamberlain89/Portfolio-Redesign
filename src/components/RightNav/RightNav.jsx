import React from 'react';
import './RightNav.css';
import PageLinks from '../PageLinks';

const RightNav = ({ showing }) => {
  return (
    <div className={`rightNav ${showing ? 'showing' : ''}`}>
      <PageLinks className="rightNav-links"/> 
    </div>
  )
}

export default RightNav
