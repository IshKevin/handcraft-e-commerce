import React from "react";
import "./AdminSidebar.css";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { GrProductHunt } from "react-icons/gr";
import { TbTransitionBottom } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import robot from "../AdminSidebar/robot.jpg";

const AdminSideBar = () => {
  return (
    <div className="side">
      <div className="side-profile">
        <img src={robot} alt="seller-photo" className="img-mic" />
        <div className="side-profile-text">
          <p>hello!!</p>
          <h1 className="side-profile-text-h1">IC Store</h1>
        </div>
      </div>
      <div className="side-menu">
        <Link to="./" className="side-menu-single">
          <AiFillDashboard className="D-icon" />
          <h1 className="side-menu-text-h1">Dashboard</h1>
        </Link>

        <Link to="./AdminUsers" className="side-menu-single">
          <MdOutlineManageAccounts className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Manage</h1>
        </Link>
        <Link to="./Adminallproducts" className="side-menu-single">
          <GrProductHunt className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">All products</h1>
        </Link>
        {/* <Link to="./Adminsellerdetail" className="side-menu-single">
          <BsBorderStyle className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Seller detail</h1>
        </Link> */}
        <Link to="./Adminsales" className="side-menu-single">
          <TbTransitionBottom className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Sales</h1>
        </Link>
        <Link to="./AdminLogout" className="side-menu-single">
          <RiLogoutBoxFill className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Logout</h1>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
