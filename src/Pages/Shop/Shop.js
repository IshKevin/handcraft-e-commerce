import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import Shopdata from '../../Components/Shop/Shopdata/Shopdata'
import CategoliesNav from '../../Components/CategoliesNav/CategoliesNav'
import './Shop.css'

const Shop = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <div className="shop-container">
       <div className='shop-cat1'>
        <CategoliesNav/>
        </div> 
        <div className='shop-cat2'>
          <Shopdata/></div>
      </div>
      <Footer/>
      </div>
  )
}

export default Shop