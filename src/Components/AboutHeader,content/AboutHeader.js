import React from 'react'
import "./AboutHeader.css";
import aboutback from "../AboutHeader,content/AboutFirst.jpg";
const AboutHeader = () => {
  return (
    <div className="AboutHeader-container">
      <img
        src={aboutback}
        alt="aboutback"
        className="aboutback"
        id="aboutbackground-pc"
      />
      <h1 id="about-title"><b>ABOUT</b></h1>
    </div>
  );
}

export default AboutHeader
