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
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="Home/sport.jpg"
        name="Product 1"
        rating={5}
        price="$19.99"
      />
      <ProductDisplay
        imageUrl="Home/sport.jpg"
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