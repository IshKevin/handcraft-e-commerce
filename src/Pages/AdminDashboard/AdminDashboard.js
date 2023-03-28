import React from "react";
import './AdminDashboard.css'
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";
function AdminDashboard({sider, setSider}) {
  return (
    <>
      <AdminHeader  sider={sider} setSider={setSider}/>
    </>
  );
}

export default AdminDashboard;
