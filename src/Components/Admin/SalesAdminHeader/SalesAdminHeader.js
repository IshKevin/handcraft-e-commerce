import React from 'react'
import "./SalesAdminHeader.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";
import { GrFilter } from "react-icons/gr";
const SalesAdminHeader = () => {
  return (
    <div className="HeadContainer">
      <div className="sales-header-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="list-home">
        <b>
          <p>Sales list</p>
        </b>
        <AiFillHome />
        <div className="header-bottom">
          <div className="Right-Headericon"></div>
        </div>
      </div>
      <div className="sale-cont1">
        <div className="user-iconparagraph">
          <select name="" id="category">
            <option value="#">Payment method</option>
            <option value="#">Mobile money</option>
            <option value="#">Airtel money</option>
          </select>
        </div>

        <div className="Leftuser-Headericon">
          <div className="user-iconparagraph">
            <input type="date" id="enter-date" />
            {/* <p>10.03.2023</p> <BsFillCalendarFill /> */}
          </div>

          <div className="user-iconparagraph">
            <p>Filter</p> <GrFilter id="nexticon" />
          </div>

          <div className="user-iconparagraph">
            <select name="" id="status">
              <option value="#">Status</option>
              <option value="#">Delivered</option>
              <option value="#">Pending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesAdminHeader
