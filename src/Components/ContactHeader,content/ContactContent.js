import React from 'react'
import "./ContactContent.css";
import { GoLocation } from "react-icons/go";
import { MdOutlineCall} from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
const ContactContent = () => {
  return (
    <div>
      <div className="contact-boxcotainer">
        <div className="contact-box1">
          <div className="contact-comments">
            <b>
              <p>Send Us A Message</p>
            </b>
            <br />
            <input type="text" id="contact-Subject" placeholder="Your Email Address" />
            <br />
            <textarea type="text" id="main-Comments" placeholder="Message" />
            <br />
            <button id="contact-commentbuton">SUBMIT</button> <br />
          </div>

          <div className="contact-leftside">
            <div className="left1">
              <div className="icon1">
                <b>
                  <GoLocation /> Address
                </b>
              </div>
              <div className="text1">
                <p>
                  Rwanda mate store center <br />
                  Kigali,rda,kgl10018
                </p>
              </div>
              <br />
            </div>
            <div className="left2">
              <div className="icon2">
                <b>
                  <MdOutlineCall /> Lets Talk
                </b>
              </div>
              <div className="text2">
                <p>+250 789475632</p>
              </div>
            </div> <br />
            <div className="left3">
              <div className="icon3">
                <b>
                  <BiEnvelope /> Sale support
                </b>
              </div>
              <div className="text3">
                <p>madein@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box2"></div>
      </div>
    </div>
  );
}

export default ContactContent
