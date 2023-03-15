import React from 'react'

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
         </div>
         <div className='dash-right'>
          <p>visit your store</p>
         </div>

        </div>
    </div>
  )
}

export default VendorOrder