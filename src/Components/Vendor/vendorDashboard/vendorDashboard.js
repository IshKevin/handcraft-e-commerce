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
          <div className='card' id="card">
          <h1>Earnings</h1>
          <Pie data={useData} className="pie"/>
          </div>
          <div className='card'> hey there</div>
          <div className='card' id='box3'>
            <Bar data={userData}/>
          </div>
          <div className='card' id='box4'> hey there</div>

        </div>
        
    </div>
    </div>
  );
}

export default VendorDashboard;