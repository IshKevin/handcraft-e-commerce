import React from 'react'
import './vendorDashboard.css'
import { Bar,Pie,Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from 'react';

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

 








  return (
    <div className='main-content'>
     <div className='topbar'>
        <div className='topbar-item'>
          <div className='dash-left'>
         <h1 className='dash-head'>Dashboard</h1>
         <p className='dash-para'>Everything here!</p>
         </div>
         <div className='dash-search'>
            <input  className='topnav-input' type= 'text' placeholder='Search everything here'/>
         </div>
         <div className='dash-right'>
          <p>visit your store</p>
         </div>

        </div>
        <div className='main-dash'>
          <div className='card' id="">
          <h1>Earnings</h1>
          <Pie data={useData} className="pie-chart"/>
          </div>
          <div className='card'> hey there</div>
          <div className='card' id='box3'> het there</div>
          <div className='card' id='box4'> hey there</div>

        </div>
        
    </div>
    </div>
  );
}

export default VendorDashboard;