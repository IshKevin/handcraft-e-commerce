import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Outlet }  from 'react-router-dom';
 import Home  from './Pages/Home'
 import VendorDashboard  from './Pages/VendorDashboard/VendorDashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import AdminUsers from './Pages/Users/AdminUsers';
import AdminSideBar from './Components/Admin/AdminSidebar/AdminSideBar';


const App = () => {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Client</h1>}/>
      <Route index element={<Home />}/>
      <Route/>
      <Route path="VenderDashboard" element={<VendorDashboard/>}/>
      
      <Route path="AdminDashboard" element={
        <div className="admin-container">
        <AdminSideBar /> 
        <Outlet/>
        </div>
      }> 
      <Route index element={<AdminDashboard/>}/>
      <Route path='AdminUsers' element = {<AdminUsers/>}/>

      </Route>
      {/* <Route path="dashBoard" element={<DashBoard posts={posts}/>}/>
      <Route path="/:blogId" element={<SinglePost posts={posts}/>}/>
      <Route path="Manage" element={<Manage posts={posts}/>}/>
      <Route path="Newpost" element={<Newpost posts={posts}/>}/>
      <Route path="dash2disp" element={<Dash2disp posts={posts}/>}/>
      <Route path="Dashhome" element={<Dashhome/>}/> */}
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App





