import React from 'react'
import './Categolies.css'
import {Link} from 'react-router-dom'
const Categolies = () => {
  return (
    <>
    <div className='catego-sect1'>
      <h1>Top Categories of The Month </h1>
      <div className='catego-sect1_img'>
        <div>
        <div class="catego-image-container">
          <img src="Home/sport.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>clothers</h2>
            <p><Link to='#'>Shop Now</Link></p>
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/sport.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>sport clothers</h2>
            <p><Link to='#'>Shop Now</Link></p>
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/sport.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>sport clothers</h2>
            <p><Link to='#'>Shop Now</Link></p>
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/sport.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>sport clothers</h2>
            <p><Link to='#'>Shop Now</Link></p>
            </div>
            </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default Categolies