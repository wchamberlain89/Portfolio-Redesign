import React from 'react';
import './Skills.css';
import DesktopIcon from '../../images/desktop-icon.png';
import DesignIcon from '../../images/design-icon.png';

const skills = [
  {
    id: 1,
    title: "Web Development",
    content: "Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. ",
    icon: DesktopIcon,
  },
  {
    id: 1,
    title: "Software Development",
    content: "Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. ",
    icon: DesktopIcon,
  },
  {
    id: 1,
    title: "Design Fundamentals",
    content: "Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. ",
    icon: DesignIcon,
  }
]

const Skills = () => {
  return (
    <div className="skills__container">
        {
          skills.map((card) => (
            <div className="skills__card">
              <img src={card.icon} alt="Skill Icon" className="skills__card__img"/>
              <h5 className="skills__card__title">{card.title}</h5>
              <p className="skills__card__content">{card.content}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Skills;