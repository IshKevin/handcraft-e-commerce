import React from 'react'
import "./SellerDetailHeader.css";
import { AiFillHome } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { BsFillCalendarFill } from "react-icons/bs";
const SellerDetailHeader = () => {
  return (
    <div className="HeadContainer">
      <div className="admin-header-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="header-bottom">
        <div className="Right-Headericon">
          <div className="icon1">
            <AiFillHome />
            Home
          </div>
          <div className="iconparagraph">
            <GrNext id="nexticon" />
            <p id="detail">seller detail</p>
          </div>
        </div>

        <div className="Left-Headericon">
          <input type="date" />
          {/* <div className="icon1">10.03.2023</div>
            <div className="iconparagraph">
              <BsFillCalendarFill />
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default SellerDetailHeader
