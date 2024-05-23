import React from 'react';
import { Link } from 'react-router-dom';
import { hero } from '../../assets';
import './Hero.css';
import Login from '../login/Login';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='img-container'>
        <img src={hero} alt='hero' className='hero-image' />
      </div>

      <div className='start-container'>
        <div className='start-data'>
          <h2 className='start-text'> Let's connect with each other...</h2>
          <p className='start-pere'>  social media and technology offer us greater convenience and connectivity.  social media is a way to connect everyone. so please use this Application.. created by kuldeep.</p>

          <span className='next'></span>


          <Link to="/login" className='start-btn'>Get started !</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
