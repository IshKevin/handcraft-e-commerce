import React from "react";
import "./AdminHeader.css";
function AdminHeader() {
  return (
    <div className="Admin-header">
      <div className="admin-header-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
    <div className="cards-container">
      <div className="Admin-cards1">
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
      </div>
      <div className="Admin-cards2">
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
      </div>
    </div>
    </div>
  );
}

export default AdminHeader
