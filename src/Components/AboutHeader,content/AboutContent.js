import React from 'react'
import "./AboutContent.css";
import aboucontentpc1 from "../AboutHeader,content/About bcd.jpg";
import aboucontentpc2 from "../AboutHeader,content/How-to-hang-a-gallery-of-wall-baskets-IG.jpg";
const AboutContent = () => {
  return (
    <div id="Aboutall-container">
      <div className="About-box1">
        <div className="first">
          <p id='para2'>
            <h1>
              <b>OUR STORY</b>
            </h1>
            <br />
            Made in Rwanda is a government-backed initiative that aims to
            promote and support local manufacturing and production in Rwanda.
            The initiative encourages both domestic and foreign investors to set
            up manufacturing facilities in Rwanda and produce goods that can be
            sold both locally and globally. The Made in Rwanda company website
            is an online platform that provides information about the initiative
            and the various products and services that are produced by local
            manufacturers in Rwanda. The website serves as a one-stop-shop for
            consumers who are interested in purchasing locally made products.
            The Made in Rwanda website features an extensive directory of
            Rwandan manufacturers and their products. The directory is
            categorized by industry, making it easy for consumers to find the
            products they are looking for. The website also features a news
            section that provides updates on the latest developments in the Made
            in Rwanda initiative and the local manufacturing industry.
          </p>
        </div>
        <div className="second">
          <img
            src={aboucontentpc1}
            alt="aboucontentpc1"
            className="aboucontentpc1"
            id="about1"
          />
        </div>
      </div>

      <div className="About-box2">
        <div className="the-first">
          <img
            src={aboucontentpc2}
            alt="aboucontentpc2"
            className="aboucontentpc2"
            id="about2"
          />
        </div>
        <div className="the-second">
          <p id='para1'>
            <h1 id="maincontent-titleog">
              <b>OUR MISSION</b>
            </h1>
            <br />
            Made in Rwanda is a government-backed initiative that aims to
            promote and support local manufacturing and production in Rwanda.
            The initiative encourages both domestic and foreign investors to set
            up manufacturing facilities in Rwanda and produce goods that can be
            sold both locally and globally. The Made in Rwanda company website
            is an online platform that provides information about the initiative
            and the various products and services that are produced by local
            manufacturers in Rwanda. The website serves as a one-stop-shop for
            consumers who are interested in purchasing locally made products.
            The Made in Rwanda website features an extensive directory of
            Rwandan manufacturers and their products. The directory is
            categorized by industry, making it easy for consumers to find the
            products they are looking for. The website also features a news
            section that provides updates on the latest developments in the Made
            in Rwanda initiative and the local manufacturing industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent
