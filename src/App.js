import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './Pages/Home'
 import VendorDashboard from './Pages/VendorDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import Vender from './Pages/Vender';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="VenderDashboard" element={<VendorDashboard/>}/>
      <Route path="AdminDashboard" element={<AdminDashboard/>}/> 
      <Route path="Vender" element={<Vender/>}/>
      <Route path="#" element={<h1>404 Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App





