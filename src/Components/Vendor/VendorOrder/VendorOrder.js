import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import './VendorOrder.css'

const VendorOrder = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
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


       <div>

       <div className='prod-div'>
          <h1 className='ti'>All Purchases</h1>
           
            <table className='product-table'>
           
            <tr className='ptr'> 
            <th>Date</th> <th>Product</th>
            <th>Quantity</th><th>Price</th>
            <th>Total</th><th>Status</th><th>Actions</th>
           </tr>
        
          
           <tr >
            <td>
              <p>12/03/2023</p>
           </td> 
              <td onClick={() =>{
                    setModal(true);}}>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            
            
           <tr>
           <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
          
          
           <tr>
           <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
          
            
           <tr>
           <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            
           
           <tr>
           <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
           
           
           <tr>
           <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            <tr>
            <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            <tr>
            <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            <tr>
            <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
            <tr>
            <td>
              <p>12/03/2023</p>
           </td> 
              <td>Trouser</td> <td>2</td> <td>$200</td> <td>$400</td> <td>Pending</td><td>:</td>
            </tr>
           

           
            </table>

          </div>
       </div>







        <div className='bg' style={{display : !modal? "none": "flex"}} >
        <div className='order-popup' >
     <div className='topper-order'>
       
       <div>
        <p>Mon 06 jan 2023  08:30 AM</p>
       </div>
       <div className='order-right' >
       <div className='statuss'>
        <select>
          <option>Change status</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Completed</option>
        </select>
       </div>
       <div className='save'> 
        <p>Save</p>
       </div  >
       <div className='print'>Print</div>
     </div>
     </div>
     <div className='main-order'>
      <div className='top-main-order'>
      <div className='ord'  >
        <h1>Customer Info</h1>
        <div id="bo1">
        <div >
        <p>Full name:  </p>
        <p>E-mail :  </p>
        <p>Phone :  </p> <p>Adress:</p>
         </div>
        <div>
        <p>KUNDA Pauline</p>
        <p>kpopo@gmail.Com</p>
        <p>0786904567</p>
        <p>Huye</p>
        </div>
        </div>

        
        
      
      </div>
      <div className='ord' id="bo2">
        <h1>Order Info</h1>
        <div id="bo1">
        <div>
        <p>Product  Name  </p>
        <p>Product  price </p>
        <p>Product  Qty  </p>
        <p>Category  </p>
        <p>delivery  </p>
        <p> pay method  </p>
        <p> Status  </p>
        </div>
        <div>
        <p>: shirt </p>
         <p>  : $300 </p>
         <p> : 2 </p>
         <p> : women </p>
         <p>  : yes  </p>
         <p>  : paypal   </p>
         <p>  : Pending   </p>
       </div>
       </div>
        
      </div>
     
      </div>
     <div className="Buttom-main-order">
      <div className='ord'id="bo4">
        <h1>Payment Info</h1>
        <div id="bo1">
        <div>
          <p>Method </p>
          <p>Owner Name </p>
          <p>Phone </p>
          <p>Status </p>
          </div>
          <div>
          <p> : MTN</p>
          <p> : BestShoes</p>
          <p> :0783465723</p>
          <p>:received </p>
          </div>
          </div>
          </div>
          <div className='ord' id="bo3">
        <h1>Delivery Info</h1>
        <div id="bo1">
          <div>
        <p>Adress </p>
        <p> Road </p>
        <p> Block </p>
        </div>
        <div>

        <p>: huye-mukoni </p>
       <p> : SH 605 H  </p>
      <p> : 2  </p>
        </div>
        </div>
      </div>
      </div>
       
      </div>
      
      </div>
      </div>

     </div>


    </>
  )
}

export default VendorOrder