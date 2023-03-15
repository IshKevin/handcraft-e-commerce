import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Outlet }  from 'react-router-dom';
import Vender from './Pages/Vender';
import Home  from './Pages/Home'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import AdminUsers from './Pages/AdminUsers/AdminUsers';
import AdminSideBar from './Components/Admin/AdminSidebar/AdminSideBar';
import VendorSidebar from './Components/Vendor/VendorSidebar/VendorSidebar';
import Product from "./Pages/VendorDashboard/Product";
import Adminallproducts from './Pages/AdminProducts/Adminallproducts';
import Adminsellerdetail from './Pages/AdminsellerDetail/Adminsellerdetail';
import Adminsales from './Pages/AdminSales/Adminsales';
import AdminLogout from './Pages/Adminlogout/AdminLogout';
import VendorDashboard from './Components/Vendor/vendorDashboard/vendorDashboard';
import Sales from './Pages/VendorDashboard/Sales';
import Order from './Pages/VendorDashboard/Order';
import Transition from './Pages/VendorDashboard/Transition';
import Setting from './Pages/VendorDashboard/Setting';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Vender" element={<Vender/>}/>
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
            path="vendorDashboard" element={
              <div className="dash">
                <VendorSidebar />
                {/* <AdminSideBar /> */}
                <Outlet />
              </div>
            }
          >
            <Route index element={<VendorDashboard />} />
            <Route path="Product" element={<Product/>} />
            <Route path="Sales" element={<Sales/>} />
            <Route path="Order" element={<Order/>} />
            <Route path="Transition" element={<Transition/>} />
            <Route path="Setting" element={<Setting/>} />



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





