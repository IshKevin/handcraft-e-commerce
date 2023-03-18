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
        name="Suit"
        rating={2}
        price="19990 Rwf"
      />
      <ProductDisplay
        imageUrl="clothers/clo2.jpg"
        name="JUmper"
        rating={5}
        price="28000 Rwf"
      />
      <ProductDisplay
        imageUrl="clothers/clo3.jpg"
        name="Sandal"
        rating={3}
        price="10000 Rwf"
      />
      <ProductDisplay
        imageUrl="clothers/clo4.jpeg"
        name="Hand bag"
        rating={4}
        price="35000 Rwf"
      />
      <ProductDisplay
        imageUrl="clothers/clo5.jpg"
        name="Men shoe"
        rating={5}
        price="9000 Rwf"
      />
      <ProductDisplay
        imageUrl="clothers/clo6.jpg"
        name="MAdein Sandal"
        rating={3}
        price="19000 Rwf"
      />
      </div>
    </div>

    </>
  )
}

export default Product