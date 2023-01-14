import React from 'react';
import './homePage.css';
import svgImage from '/assets/images/illustration.svg';

const Home = () => {
  return (
    <div className="home-page">
      <div className="left-section">
        <p className="centered-text">Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</p>
      </div>
      <div className="right-section">
        <img src={'/assets/illustration.svg'} alt="Illustration" className="centered-image" height="480px" />
      </div>
    </div>
  );
}

export default Home;
