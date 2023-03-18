import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'

import Shopdata from '../../Components/Shop/Shopdata/Shopdata'


const Shop = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <div className="shop-container">
        <Shopdata/>
      </div>
      <Footer/>
      </div>
  )
}

export default Shop