import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './VendorTransition.css'

const VendorTransition = () => {
  return (
 <>
 
 <div className='sale-content'>
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Transitions</h1>
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
           <option>Method</option> 
            <option>MTN</option>
            <option>Airtel</option>
            <option>Paypal</option>
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

        <div className='boxx'>
          <table className='table'>
            <tr>
            <th>Date</th> <th>Customer</th>
            <th>  Payment</th><th>Method</th>
            <th>Status</th><th> Expenses</th> <th>Earnings</th>
           </tr>
           <tr>
           
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>
            <tr>
            <td> 1/jan/2023</td> <td>Ms.kelly</td> <td>10,000</td> <td>Paypal</td> <td>delivered</td> <td>$200</td>
            <td>$2000</td>
            </tr>







          </table>
           <div className='nextp'>
            <ul>
              <li className='next'>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>
            </ul>
             <p>Next</p>
           </div>

          </div>

    </div>
 
 
 </>
   
  )
}

export default VendorTransition