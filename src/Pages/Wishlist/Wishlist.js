import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import CategoliesNav from '../../Components/CategoliesNav/CategoliesNav'
import './Wishlist.css'
const Wishlist = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      
      <div className='Wishlist-style'>
      <div className='wishlist-cat1'><CategoliesNav/></div>
      <div className='wishlist-cat2'><Wishlist/></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Wishlist