import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route,Outlet }  from 'react-router-dom';
 import Home  from './Pages/Home'
 import VendorDashboard  from './Pages/VendorDashboard/VendorDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import Vender from './Pages/Vender';
import VendorSidebar from './Components/Vendor/VendorSidebar/VendorSidebar';
import Product from './Pages/VendorDashboard/Product';
// import AdminContent from './Pages/AdminContent';



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}/>
      <Route index element={<Home />}/>
      <Route path="VendorDashboard"  element={
    <div className='dash'>
    <VendorSidebar/>
    <Outlet />
      </div>
    }/>
      <Route path="Vender" element={<Vender/>}/>
      <Route index element={<VendorDashboard/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App





