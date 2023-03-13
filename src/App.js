import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route,Outlet }  from 'react-router-dom';
 import Home  from './Pages/Home'
 import VendorDashboard  from './Pages/VendorDashboard/VendorDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import VendorSidebar from './Components/Vendor/VendorSidebar/VendorSidebar';
import Product from './Pages/VendorDashboard/Product';
// import AdminContent from './Pages/AdminContent';



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route   path  ="/"   element={<h1>Client</h1>} >
      <Route index element={<Home />}/>
      </Route>
      
      <Route path="VendorDashboard"  element={
    <div className='dash'>
    <VendorSidebar/>
    <Outlet />
      </div>
    }>
      <Route index element={<VendorDashboard/>}/>
      <Route path="product" element={<Product/>}/>



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





