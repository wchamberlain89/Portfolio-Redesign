import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const SocialIcons = ({ className, color }) => {
  return (
    <div className={`social-icons ${className}`}>
      <IconContext.Provider value={{ color: color ? color : '', size: "100%", className: "social-icon" }}>
        <div className={"social-icon__wrapper"}>
          <FaGithub />
        </div>
        <div className={"social-icon__wrapper"}>
          <FaLinkedin />
        </div>
      </IconContext.Provider>
      </div>
  )
}

export default SocialIcons;