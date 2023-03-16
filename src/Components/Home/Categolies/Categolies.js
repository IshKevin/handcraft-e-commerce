import React from 'react'
import './Categolies.css'
import {Link} from 'react-router-dom'
import ProductDisplay from '../../OneProduct/ProductDisplay'
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
      <div className='catego-sect3'>
        <div className='catego-sect3-header'>
          <div><h1>Popula Product</h1></div>
          <div><Link to='#'>More product </Link></div>
        </div>
      <div className='catego-sect3-img'>
        <div className='catego-sect3-img1'>
          <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>
      </div>
      </div>

      <div className='catego-sect3-img2'>
      <div> 
        <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>

        <div> 
        <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>

       <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      /></div>

      </div>

      </div>
     

      </>
  )
}

export default Categolies