import React from 'react';
import './about.css';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import AboutHero from '../../images/about-hero.png';
import Blob from '../../images/blob.png';

const About = () => {
  return (
    <Layout>
        <PageContainer>
          <div className="about-page__wrapper">
        
          <img src={Blob} className="about-page__blob" />
          
          <div className="about-info__container">
            <div className="about-info__wrapper">
              <h1 className="section__header about-page__header">
                About Me
              </h1>

              <p className="about-info__text">Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. </p>
              <div className="about-info__blockquote__container">
                <blockquote className="about-info__blockquote">"Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. "</blockquote>
              </div>
              <p className="about-info__text">
                Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, 
                feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis.
              </p>
            </div>
          </div>

          <div className="about-page__hero__container">
            <div className="about-page__hero">
              <img className="about-page__hero__image" src={AboutHero}></img>
            </div>
          </div>
        
        </div>  
      </PageContainer>
    </Layout>
  )
}

export default About;