import React from 'react';
import './Project.css';
import PageContainer from '../PageContainer';

const Project = ({ project, reversed }) => {
  return (
    <div className={`project ${reversed ? reversed : ''}`}>
      <PageContainer>
        <div className="project__container">
          <img src={project.img} className="project__img" />
          <div className="project__info">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>
            <div className="project__skills">
              {
                project.technologies.map(technology => (
                  <div className="project__skill">{technology}</div>
                ))
              }
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default Project;