import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './VendorOrder.css'

const VendorOrder = () => {
  return (
    <div>
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Order Info</h1>
         <p className='dash-para'>Everything here!</p>
         </div>
         <div className='dash-search'>
            <input  className='topnav-input' type= 'text' placeholder='Search everything here'/>
            <FaSearch className='sear'/>
         </div>
         <div className='dash-right'>
          <p>visit your store</p>
         </div>

        </div>
     <div className='topper-order'>
       
       <div>
        <h1>Order id :0001</h1>
        <p>Mon 06 jan 2023  08:30 AM</p>
       </div>
       <div className='order-right' >
       <div>
        <select>
          <option>Change status</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Completed</option>
        </select>
       </div>
       <div > 
        <p>Save</p>
       </div>
       <div>Print</div>
     </div>
     </div>
     <div className='main-order'>
      <div className='ord'></div>
      <div className='ord'></div>
      <div className='ord'></div>
      <div className='ord'></div>
      <div className='ord'></div>

     </div>



    </div>
  )
}

export default VendorOrder