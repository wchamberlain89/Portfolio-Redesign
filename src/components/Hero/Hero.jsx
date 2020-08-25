import React from 'react';
import './Hero.css';
import HeroImg from '../../images/hero.png';
import Digital from '../../images/digital.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img src={HeroImg} className="hero-img" alt="hero-image" />
        <img src={Digital} className="hero-img digital" alt="digital background"/>
        <h1 className="hero-title">Ward Chamberlain</h1>
      </div>
      <div className="hero-info">
        <h5 className="hero-info-title">Front-End Developer from Portland, OR</h5>
        <p>Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. Quisque eu condimentum orci, in luctus felis. Praesent in mi faucibus, feugiat urna feugiat, pharetra tellus. Suspendisse eget mattis felis. </p>
      </div>
    </div>
  )
}

export default Hero;