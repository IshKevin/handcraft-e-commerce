import React from 'react'
import "./UserManageHeader.css";
import { AiFillHome } from "react-icons/ai";
import { GrFilter } from "react-icons/gr";
const UserManageHeader = () => {
  return (
    <div className="HeadContainer">
      <div className="admin-manageheader-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="list-home">
        <b>
          <p>Users list</p>
        </b>
        <AiFillHome />
        <div className="header-bottom">
          <div className="Right-Headericon"></div>
        </div>
      </div>
      <div className="cont1">
        <div className="user-iconparagraph">
          <select name="" id="category">
            <option value="#">All categories</option>
            <option value="#">Saller</option>
            <option value="#">Customer</option>
          </select>
        </div>

        <div className="Leftuser-Headericon">
          <div className="user-iconparagraph">
            <input type="date" id="enter-date" />
          </div>

          <div className="user-iconparagraph">
            <p>Filter</p> <GrFilter id="nexticon" />
          </div>

          <div className="user-iconparagraph">
            <select name="" id="status">
              <option value="#">Status</option>
              <option value="#">Online</option>
              <option value="#">Offline</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManageHeader;
