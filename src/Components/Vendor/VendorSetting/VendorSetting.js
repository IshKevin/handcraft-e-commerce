import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './VendorSetting.css'

const VendorSetting = () => {
  return (
    <div>
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>MY Profile</h1>
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
        <div>
          <div className='line1'>
            <h1>Personal Information</h1>
          </div>
          <div className='form1'>
            <div>
            <h1>DESCRIPTION</h1>
            <textarea type="text"/>
          </div>
          <div>
            <table>
          <tr className='tr'>
        <td>
        <h1>FIRST NAME</h1>
        <input type= 'text'name="name" placeholder='KUNDA'/>
        </td>
        <td>
        <h1>LAST NAME</h1>
        <input type= 'text'name="name" placeholder='Pauline'/>
        </td>
        </tr>
        <tr className='tr'>
        <td>
        <h1>BIRTH DATE</h1>
        <input type= 'text'name="name" placeholder='08 Jan 2000'/>
        </td>
        <td>
        <h1>PHONE</h1>
        <input type= 'text'name="name" placeholder='0785676532'/>
        </td>
        </tr>
        </table>

          </div>
          

        </div>
        <div className='line1'>
            <h1>Other information</h1>
          </div>
          <div className='form1' >
          <table>
          <tr className='tr'>
        <td>
        <h1>ACCOUNT NAME</h1>
        <input type= 'text'name="name" placeholder='Shoesshop'/>
        </td>
        <td>
        <h1>ACCOUNT NUMBER</h1>
        <input type= 'text'name="name" placeholder='2345 **** **** **** ****'/>
        </td>
        </tr>
        <tr className='tr'>
        <td>
        <h1>BANK </h1>
        <input type= 'text'name="name" placeholder='Cogebanque'/>
        </td>
        {/* <td>
        <h1>CATEGORY</h1>
        <input type= 'text'name="name" placeholder='credit card '/>
        </td> */}
        </tr>
        </table>
        
          </div>
          <div className='bttn'>
          <button type='button' name="upadate" className='update' id="product-button"> Update</button>
          </div>
        </div>
    </div>
  )
}

export default VendorSetting