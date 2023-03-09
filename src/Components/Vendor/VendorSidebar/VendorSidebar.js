import React from 'react'
import './VendorSidebar.css'
import {AiFillDashboard} from 'react-icons/ai'


const VendorSidebar = () => {
  return (
    <div className='sidebar'> 
    <div className='sidebar-profile'>
      <img src="robot.jpg" alt="profile icon" className='img-mic' />
        <div className='sidebar-profile-text'>
        <p>hello!!</p>
         <h1 className='sidebar-profile-text-h1'>IC Store</h1>
        </div>
     
    </div>
     <div className='sidebar-menu'>
      <div className='D-icon'>
      <AiFillDashboard className=''/>
      </div>

     </div>
    </div>
  );
}

export default VendorSidebar;