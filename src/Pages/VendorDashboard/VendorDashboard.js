 import React from 'react'
 import VendorDashboard  from '../../Components/Vendor/vendorDashboard/vendorDashboard'
 import VendorSidebar from '../../Components/Vendor/VendorSidebar/VendorSidebar'
 import './vendorDashboard.css'





const vendorDashboard = () => {
  return (
    <div className='dash'>
       <VendorSidebar/>
      <VendorDashboard/>
      
    </div>
  );
}

export default vendorDashboard;