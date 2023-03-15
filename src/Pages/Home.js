import React  from 'react'
import Bodyslide from '../Components/Home/BodySlide/Bodyslide'
import Categolies from '../Components/Home/Categolies/Categolies'
import Chip from '../Components/Home/Chipscard/Chip'
import Deals from '../Components/Home/Deals/Deals'
import Footer from '../Components/Home/Footer/Footer'
import Header from '../Components/Home/Header/Header'
import Product from '../Components/Home/Product/Product'
import SubHeader from '../Components/Home/SubHeader/SubHeader'

const Home = () => {
  return (
    <div>
        <Header />
        <SubHeader />
        <Bodyslide/>
        <Deals/>
        <Chip/>
        <Categolies/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Home