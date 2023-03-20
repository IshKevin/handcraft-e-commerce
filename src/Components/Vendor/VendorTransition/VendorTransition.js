import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './VendorTransition.css'

const VendorTransition = () => {
  return (
    <div className='trans-content'>
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Transaction </h1>
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

        <div className='hd-sales'>
          <div> 
            <select>
           <option>All category</option> 
            <option>Clothes</option>
            <option>Art</option>
            <option>Food</option>
            </select>
          </div>
          <div className='s-right'>
          <div>
            <input type= 'date' className='date'/>
          </div>

          <div>
            <select>
              <option>Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Delivered</option>
            </select>
          </div>
          <div className='filter'>
            <p>Filter</p>
            <FaSearch className='filcon'/>
          </div>
          </div>
          </div>


          <div className='card' id='box4'>
          <table className='table'>
            <tr>
              <th><input type="checkbox" name="select"/> </th>
            <th>PID</th> 
            <th>  Payment</th><th>Method</th>
            <th>Expense</th><th>Date</th> <th>Earning</th>
           </tr>
           <tr>
           <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td>  <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>10,000</td> <td>Paypal</td> <td>1000</td> <td> 1/jan/2023</td> <td>9000</td>
            </tr>







          </table>

          </div>
       


    </div>
  )
}

export default VendorTransition