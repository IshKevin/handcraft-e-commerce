import React from 'react'
import "./AllProductHeader.css";
import { AiFillHome } from "react-icons/ai";

import { BsFillCalendarFill } from "react-icons/bs";
import { GrFilter } from "react-icons/gr";
const AllProductHeader = () => {
  return (
    <div className="HeadContainer">
      <div className="product-header-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="list-home">
        <b>
          <p>Product list</p>
        </b>
        <AiFillHome />
        <div className="header-bottom">
          <div className="Right-Headericon"></div>
        </div>
      </div>
      <div className="product-cont1">
        <div className="user-iconparagraph">
          <select name="" id="category">
            <option value="option1"> categories </option>
            <option value="option2">FASHION</option>
            <option value="option3">Made in rwanda</option>
            <option value="option3">Sport</option>
            <option value="option3">Electronics</option>
            <option value="option3">Home and garden</option>
            <option value="option3">Health and beauty</option>
            <option value="option3">Toys and hobbies</option>
            <option value="option3">Automotive</option>
            <option value="option3">Baby and kids</option>
            <option value="option3">Books and stationery</option>
            <option value="option3">Food and drinks</option>
            <option value="option3">Pets</option>
            <option value="option3">Travel</option>
            <option value="option3">Other</option>
          </select>
        </div>

        <div className="Leftuser-Headericon">
          <div className="user-iconparagraph">
            <input type="date" id='enter-date' />
            {/* <p>10.03.2023</p> <BsFillCalendarFill /> */}
          </div>

          <div className="user-iconparagraph">
            <p>Filter</p> <GrFilter id="nexticon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProductHeader
