
import './Bodyslide.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';


const Bodyslide = () => {
  return (

 <Swiper 
 spaceBetween={99930}
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
       <div className='slide-image'>
    <img src='Slide/slide1.webp' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
        {/* 
        <div className='body-slide-image'>
        <div className='body-slide-text'>
            <p>Shoe for running  </p> 
            <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
            <p>Shop from the comfort of your home</p>
            <button>Shop Now</button>
         </div>
         </div>     */}
         
    </SwiperSlide>
    {/* <SwiperSlide className='body-slide'>
         slide2
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
      slide3
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
      slide4
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
      slide5
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
      slide6
    </SwiperSlide> */}
    </Swiper>
  )
}

export default Bodyslide