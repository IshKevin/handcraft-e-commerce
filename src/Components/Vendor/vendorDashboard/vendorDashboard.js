import React from 'react'
import './vendorDashboard.css'
import { Bar,Pie,Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const VendorDashboard = () => {
  const pData = [
    {
      id: 1,
      content: "",
      userGain:50,
      userLost: 30,
    },
    {
      id: 2,
      content: "medium",
      userGain: 25,
      userLost: 15,
    },
    {
      id: 3,
      content: "bad",
      userGain: 5,
      userLost: 0,
    },
    
  ];

    const [useData,setuseData] = useState({

        labels : pData.map((data)=>data.content),
        datasets :[{
            label:"comments",
            data : pData.map((data)=>data.userGain),
            backgroundColor :["green","brown","teal"],
        },],
        
    });

    const LData = [
      {
        id: 1,
        content: "Jan",
        userGain:50,
        userLost: 30,
      },
      {
        id: 2,
        content: "Feb",
        userGain: 25,
        userLost: 15,
      },
      {
        id: 3,
        content: "Mar",
        userGain: 10,
        userLost: 0,
      },
      {
        id: 3,
        content: "Apr",
        userGain: 25,
        userLost: 0,
      },
      {
        id: 3,
        content: "May",
        userGain: 5,
        userLost: 0,
      },
      {
        id: 3,
        content: "Jun",
        userGain: 15,
        userLost: 0,
      },
      {
        id: 3,
        content: "Jul",
        userGain: 45,
        userLost: 0,
      },
      {
        id: 3,
        content: "Aug",
        userGain: 32,
        userLost: 0,
      },
      {
        id: 3,
        content: "Sept",
        userGain: 34,
        userLost: 0,
      },
      {
        id: 3,
        content: "Oct",
        userGain: 60,
        userLost: 0,
      },
      {
        id: 3,
        content: "Nov",
        userGain: 23,
        userLost: 0,
      },
      {
        id: 3,
        content: "Dec",
        userGain: 30,
        userLost: 0,
      },
      
    ]
    ;
  
      const [userData,setuserData] = useState({
  
          labels : LData.map((data)=>data.content),
          datasets :[{
              label:"comments",
              data : LData.map((data)=>data.userGain),
              backgroundColor :["green","brown","teal","lightblue","black","blue"],
          },],
          
      });
 








  return (
    <div className='main-Dashboard'>
     <div className='topbar'>
        <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Dashboard</h1>
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
        <div id='dashboard-content'>
          <div className='card' id="card1">

          <h1>Earnings</h1>
          <div className="pie">
          <Pie data={useData} />
          </div>
          </div>
          <div className='card' id="card2">
           <div className='statics'> 
            <h1>Orders</h1>
            <p>280</p>
           </div>
           <div className='statics'>
           <h1>Tax</h1>
            <p>280</p>
           </div>
           <div className='statics'>
           <h1>Earning</h1>
            <p>280</p>
           </div>



          </div>

          <div className='card' id='box3'>
            <h1>Sales</h1>
            <div className='bar-chart'>
            <Bar data={userData}/>
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
        
    </div>
    </div>
  );
}

export default VendorDashboard;