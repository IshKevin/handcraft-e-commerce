import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import ProductDisplay from '../../Components/OneProduct/ProductDisplay'


const Shop = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <h1>
        <ProductDisplay/>
      </h1>
      <Footer/>
      </div>
  )
}

export default Shop