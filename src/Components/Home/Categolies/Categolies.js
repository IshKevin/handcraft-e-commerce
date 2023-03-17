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
          <img src="Home/fashion2.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>IGITENGE FASHION</h2>
            
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/comp.jpg" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>GAMING COMPUTER</h2>
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/workshoe.jpeg" alt="Your I"/>
          <div class="catego-text-overlay">
            <h2>WOMEN FASHION</h2>
            </div>
            </div>
        </div>
        <div>
        <div class="catego-image-container">
          <img src="Home/Fresh-Cream.png" alt="Your Image"/>
          <div class="catego-text-overlay">
            <h2>INYANGE PRODUCTS</h2>
            
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
        imageUrl="/PProduct/product8.jpg"
        name="MAdein Sandal"
        rating={5}
        price="19000 Rwf"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="/PProduct/product1.png"
        name="Xiaomi Redmi Note"
        rating={3}
        price="75000 Rwf"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="/PProduct/product2.jpg"
        name="visit Rwanda shirt"
        rating={4}
        price="15000 Rwf"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="/PProduct/product3.webp"
        name="Sport shoe"
        rating={4}
        price="25000 Rwf"
      /></div>
      </div>
      </div>

      <div className='catego-sect3-img2'>
      <div> 
        <ProductDisplay
        imageUrl="/PProduct/product4.jpg"
        name="Men shirt"
        rating={5}
        price="42000 Rwf"
      /></div>

        <div> 
        <ProductDisplay
        imageUrl="/PProduct/product5.jpeg"
        name="jawery"
        rating={5}
        price="15000 Rwf"
      /></div>

       <div> 
            <ProductDisplay
        imageUrl="/PProduct/product6.jpg"
        name="Notebook pc"
        rating={5}
        price="98000 Rwf"
      /></div>
      <div> 
            <ProductDisplay
        imageUrl="/PProduct/product7.jpg"
        name="MAdein art"
        rating={3}
        price="50000 Rwf"
      /></div>

      </div>

      </div>
     

      </>
  )
}

export default Categolies