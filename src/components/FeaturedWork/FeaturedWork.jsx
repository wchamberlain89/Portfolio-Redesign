import React from 'react';
import './FeaturedWork.css';
import Project from '../Project';
import WalkerTrekker from '../../images/walker-trekker.png';

const projects = [
  {
    id: 1,
    img: WalkerTrekker,
    title: "Walker Trekker",
    description: "Lantern Archives is a campaign manager for the board game Kingdom Death. Lantern Archives will track your all your settlements character details and Inventory Lantern Archives is a campaign manager for the board game Kingdom Death. Lantern Archives will track your all your settlements character details and Inventory",
    technologies: [
      "Javascript",
      "Postgres",
      "Socket IO", 
      "React Native",
      "Redux",
      "Node",
      "Expo"
    ]
  },
  {
    id: 2,
    img: WalkerTrekker,
    title: "Walker Trekker",
    description: "Lantern Archives is a campaign manager for the board game Kingdom Death. Lantern Archives will track your all your settlements character details and Inventory Lantern Archives is a campaign manager for the board game Kingdom Death. Lantern Archives will track your all your settlements character details and Inventory",
    technologies: [
      "Javascript",
      "Postgres",
      "Socket IO", 
      "React Native",
      "Redux",
      "Node",
      "Expo"
    ]
  }
];

const FeaturedWork = () => {
  return (
    <div className="projects">
      <h3 className="projects__title section__header">Featured Work</h3>
      {
        projects.map( project => (
          <Project key={project.id} project={project} reversed={project.id % 2 ? '' : 'reversed'}/>
        ))
      }
    </div>
  )
}

export default FeaturedWork;