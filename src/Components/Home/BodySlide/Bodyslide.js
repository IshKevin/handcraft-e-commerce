
import './Bodyslide.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Bodyslide = () => {
  return (

 <Swiper 
 spaceBetween={30}
 centeredSlides={true}
 autoplay={{
   delay: 2500,
   disableOnInteraction: false,
 }}
 pagination={{
   clickable: true,
 }}
 navigation={true}
 modules={[Autoplay, Pagination, Navigation]}
 className="mySwiper">
    <SwiperSlide className='body-slide'>

       {/* <div className='body-slide-image'>
        <div className='body-slide-text'>
            <p>Shoe for running  </p> 
            <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
            <p>Shop from the comfort of your home</p>
            <button>Shop Now</button>
         </div>
         </div>    */}

        <h1>hello swiper1</h1>
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
      {/* <img src='Home/slide2.jpg'/>
       <div className='body-slide-image'>
        <div className='body-slide-text'>
            <p>Shoe for running  </p> 
            <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
            <p>Shop from the comfort of your home</p>
            <button>Shop Now</button>
         </div>
         </div>    */}
    </SwiperSlide>
    </Swiper>
  )
}

export default Bodyslide