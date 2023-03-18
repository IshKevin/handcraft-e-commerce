import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import ShopLeft from '../../Components/Shop/ShopLeft/ShopLeft'
import Shopdata from '../../Components/Shop/Shopdata/Shopdata'


const Shop = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <div className="shop-container">
        <ShopLeft/>
        <Shopdata/>
      </div>
      <Footer/>
      </div>
  )
}

export default Shop