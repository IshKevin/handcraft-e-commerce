import React from 'react'
import VendorDashboard from '../Components/Vendor/vendorDashboard/vendorDashboard'
import VendorSidebar from '../Components/Vendor/VendorSidebar/VendorSidebar'

const vendorDashboard = () => {
  return (
    <div className='dash'>
      <VendorDashboard/>
       <VendorSidebar/>
    </div>
  );
}

export default vendorDashboard;