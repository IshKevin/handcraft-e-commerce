import React from 'react'
import Footer from '../Components/Home/Footer/Footer'
import Header from '../Components/Home/Header/Header'
import SubHeader from '../Components/Home/SubHeader/SubHeader'
import VenderBody from '../Components/Vender/VenderBody'
import CategoliesNav from '../Components/CategoliesNav/CategoliesNav'

const Vender = () => {
  return (
    <div>
      <Header/>
      <SubHeader />
      <CategoliesNav/>
      <VenderBody/>
      <Footer/>
    </div>
  )
}

export default Vender