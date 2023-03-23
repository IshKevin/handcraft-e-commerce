import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import Shopdata from '../../Components/Shop/Shopdata/Shopdata'
import CategoliesNav from '../../Components/CategoliesNav/CategoliesNav'
import './Shop.css'
import Shopbanner from '../../Components/Shop/Shopbanner/Shopbanner'
import Hotitems from '../../Components/Shop/Hotitems/Hotitems'


const Shop = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <div className="shop-container">
       <div className='shop-cat1'>
        <CategoliesNav/>
        <Hotitems/>
        </div> 
        <div className='shop-cat2'>
          <Shopbanner/>
          <Shopdata/>
          </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Shop