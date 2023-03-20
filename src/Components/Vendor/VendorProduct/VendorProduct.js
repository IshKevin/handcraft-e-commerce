import React from 'react'
import './VendorProduct.css'
import {FaSearch} from 'react-icons/fa'

const VendorProduct = () => {
  return (
    <div className='product-content' >
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Product info</h1>
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
        <div className='main-product'>
          <h1 className='ti'>Product Details</h1>
          <div>
            <form className='forms'>
              <table>
                <tr className='tr'>
                <td>
              <h1>Product Name</h1>
              <input type= 'text'name="name" placeholder='type name here'/>
              </td>

              <td>
              <h1>Upload Photo</h1>
              <input type= 'file'name="name" />
              </td>
              </tr>
              <tr className='tr'>
        
              <td>
              <h1>Product Description</h1>
              <textarea type= 'text'name="name" placeholder='type name here'/>
              </td>
              <td>
              <h1>Product Tag</h1>
              <input type= 'text'name="name" placeholder='type name here'/>
              </td>
              </tr>

            
              <tr className='tr'>
              <td>
              <h1>Category</h1>
              <input type= 'text'name="name" placeholder='type name here'/>
              </td>
              <td>
              {/* <h1>Brand</h1>
              <input type= 'text'name="name" placeholder='type name here'/> */}
               <h1>Price Discount</h1>
              <input type= 'text'name="name" placeholder='type name here'/>
              </td>
             
             </tr>
              <tr className='tr'>
                
              <td>
              <h1>Product price</h1>
              <input type= 'text'name="name" placeholder='type name here'/>
              </td>
              
              </tr>
              </table>
              <div className='buttom'>
              <button type='button' name="upadate" className='update' id="product-button"> Update</button>
              <button type='button' name="delete" className='delete' id="product-button"> Delete</button>
              <button type='button' name="cancel" className='cancel' id="product-button"> Cancel</button>
              </div>
            </form>
          </div>

        </div>
    </div>
  )
}

export default VendorProduct