import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import './Cart.css'
import Cartcomp from '../../Components/Cart/Cartcomp/Cartcomp'


const Cart = () => {
  return (
    <>
    <Header />
    <SubHeader/>
    <div className='cart'>
      <Cartcomp/>
      </div>
      <Footer/>  
    </>
  )
}

export default Cart