import React  from 'react'
import Bodyslide from '../Components/Home/BodySlide/Bodyslide'
import Deals from '../Components/Home/Deals/Deals'
import Header from '../Components/Home/Header/Header'
import SubHeader from '../Components/Home/SubHeader/SubHeader'

const Home = () => {
  return (
    <div>
        <Header />
        <SubHeader />
        <Bodyslide/>
        <Deals/>
    </div>
  )
}

export default Home