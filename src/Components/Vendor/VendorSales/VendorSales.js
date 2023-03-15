import React from 'react'

const VendorSales = () => {
  return (
    <div>
         <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Sales Details</h1>
         <p className='dash-para'>Everything here!</p>
         </div>
         <div className='dash-search'>
            <input  className='topnav-input' type= 'text' placeholder='Search everything here'/>
         </div>
         <div className='dash-right'>
          <p>visit your store</p>
         </div>

        </div>

        <div className='card' id='box4'>
          <h1>Recent Purchase</h1>
          <table className='table'>
            <tr>
              <th><input type="checkbox" name="select"/> </th>
            <th>ID</th> <th>Date</th>
            <th>Product</th><th>Payment</th>
            <th>Fulfillment</th><th>total</th>
           </tr>
           <tr>
           <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>
            <tr>
            <th><input type="checkbox" name="select"/> </th>
            <td>001</td> <td>1/jan/2023</td> <td>dress</td> <td>pending</td> <td>delivered</td> <td>10,000</td>
            </tr>







          </table>

          </div>

    </div>
  )
}

export default VendorSales