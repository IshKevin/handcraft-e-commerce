import React from 'react'
import ProductDisplay from '../../OneProduct/ProductDisplay'
import './Product.css'

const Product = () => {
  return (
    <>
    <h1>Clothing & Apparel</h1>
    <div className='product-disp'>
    <div className='product-disp-card'>left appear card</div>
    <div className='product-disp-list'>
    <ProductDisplay
        imageUrl="clothers/clo1.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="clothers/clo2.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="clothers/clo3.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="clothers/clo4.jpeg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="clothers/clo5.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="clothers/clo6.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      </div>
    </div>

    </>
  )
}

export default Product