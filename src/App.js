import React from 'react'
import './App.css';

import { BrowserRouter, Routes, Route, Outlet }  from 'react-router-dom';
 import Home  from './Pages/Home'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import AdminUsers from './Pages/Users/AdminUsers';
import AdminSideBar from './Components/Admin/AdminSidebar/AdminSideBar';
import VendorSidebar from './Components/Vendor/VendorSidebar/VendorSidebar';
import Product from "./Pages/VendorDashboard/Product";
import Adminallproducts from './Pages/AdminProducts/Adminallproducts';
import Adminsellerdetail from './Pages/AdminsellerDetail/Adminsellerdetail';
import Adminsales from './Pages/AdminSales/Adminsales';
import AdminLogout from './Pages/Adminlogout/AdminLogout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Client</h1>} />
          <Route index element={<Home />} />
          <Route />
          <Route
            path="AdminDashboard"
            element={
              <div className="admin-container">
                <AdminSideBar />
                <Outlet />
              </div>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="AdminUsers" element={<AdminUsers />} />
            <Route path="Adminallproducts" element={<Adminallproducts />} />
            <Route path="Adminsellerdetail" element={<Adminsellerdetail />} />
            <Route path="Adminsales" element={<Adminsales />} />
            <Route path="AdminLogout" element={<AdminLogout />} />
          </Route>

          <Route
            path="vendorDashboard"
            element={
              <div className="dash">
                <VendorSidebar />
                <Outlet />
              </div>
            }
          >
            <Route index element={<vendorDashboard />} />
            <Route path="Product" element={<Product />} />
          </Route>
          {/* <Route path="dashBoard" element={<DashBoard posts={posts}/>}/>
      <Route path="/:blogId" element={<SinglePost posts={posts}/>}/>
      <Route path="Manage" element={<Manage posts={posts}/>}/>
      <Route path="Newpost" element={<Newpost posts={posts}/>}/>
      <Route path="dash2disp" element={<Dash2disp posts={posts}/>}/>
      <Route path="Dashhome" element={<Dashhome/>}/> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App





