import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { FaFolderOpen } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import "./AdminDashboard.css";

const SideBar= () => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src="robot.jpg" alt="profile icon" className="img-mic" />
        <div className="sidebar-profile-text">
          <p>hello!!</p>
          <h1 className="sidebar-profile-text-h1">IC Store</h1>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <AiFillDashboard className="" />
        </div>
        <div className="D-icon1-name">
          <p>Dashboard</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <FaUsersCog />
        </div>
        <div className="D-icon1-name">
          <p>Manage User</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <SiProducthunt />
        </div>
        <div className="D-icon1-name">
          <p>All products</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <FaFolderOpen />
        </div>
        <div className="D-icon1-name">
          <p>Seller details</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <FaCalendar />
        </div>
        <div className="D-icon1-name">
          <p>Sales</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="D-icon1">
          <RiLogoutBoxFill />
        </div>
        <div className="D-icon1-name">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
