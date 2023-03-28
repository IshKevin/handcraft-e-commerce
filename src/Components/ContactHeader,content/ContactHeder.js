import React from 'react'
import "./ContactHeder.css";
import Contactaboutback from "../ContactHeader,content/AboutFirst.jpg";
const ContactHeder = () => {
  return (
    <div className="ContacttHeader-container">
      <img
        src={Contactaboutback}
        alt="Contactaboutback"
        className="Contactaboutback"
        id="Contactaboutbackground-pc"
      />
      <h1 id="Contactabout-title">
        <b>CONTACT</b>
      </h1>
    </div>
  );
}

export default ContactHeder
