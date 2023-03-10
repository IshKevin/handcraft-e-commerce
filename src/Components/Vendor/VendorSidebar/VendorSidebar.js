import React from 'react'
import './VendorSidebar.css'
import {AiFillDashboard} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BsBorderStyle} from 'react-icons/bs'
import {FcSalesPerformance} from 'react-icons/fc' 
import {TbTransitionBottom} from 'react-icons/tb'
import {AiFillSetting} from 'react-icons/ai'



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
      <div className='sidebar-menu-single'>
      <AiFillDashboard className='D-icon' />
      <h1 className='sidebar-menu-text-h1'>Dashboard</h1>

      </div>
      <div className='sidebar-menu-single'>
      <MdProductionQuantityLimits className='D-icon' id='icons'/>
      <h1 className='sidebar-menu-text-h1'>Products</h1>

      </div>
      <div className='sidebar-menu-single'>
      <FcSalesPerformance className='D-icon' id='icons'/>
      <h1 className='sidebar-menu-text-h1'>Orders</h1>

      </div>
      <div className='sidebar-menu-single'>
      < BsBorderStyle className='D-icon' id='icons'/>
      <h1 className='sidebar-menu-text-h1'>Sales</h1>

      </div>
      <div className='sidebar-menu-single'>
      <TbTransitionBottom className='D-icon' id='icons'/>
      <h1 className='sidebar-menu-text-h1'>Transition</h1>

      </div>
      <div className='sidebar-menu-single'>
      <AiFillSetting className='D-icon' id='icons'/>
      <h1 className='sidebar-menu-text-h1'>Settings</h1>

      </div>

     </div>
    </div>
  );
}

export default VendorSidebar;