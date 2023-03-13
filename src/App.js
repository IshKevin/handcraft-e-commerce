import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
 import Home  from './Pages/Home'
 import VendorDashboard  from './Pages/VendorDashboard/VendorDashboard';
import AdminDashboard from './Pages/AdminDashboard';
// import AdminContent from './Pages/AdminContent';



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="VenderDashboard" element={<VendorDashboard/>}/>
      <Route path="AdminDashboard" element={<AdminDashboard/>}/> 
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





