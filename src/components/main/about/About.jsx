// About.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './About.css';
import about_picture from "../../../assets/pics/about_picture.svg"

const About = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleRequestDataClick = () => {
    if (isLoggedIn) {
      navigate('/search');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="about-block">
      <div className="about-info-block">
        <h1 className="about-h1-box">Search for<br />publications <br />about companies<br />by TIN</h1>
        <p className="about-p-box">Comprehensive analysis of publications, obtaining data in PDF format sent to email.</p>
        {isLoggedIn && <button
          className="button"
          id="requestDataButton"
          onClick={handleRequestDataClick}>
          Request Data
          </button>
        }
      </div>
      <img className="about-image" src={about_picture} alt="About Scan image" />
    </div>
  )
}

export default About
