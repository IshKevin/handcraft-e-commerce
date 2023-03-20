
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


  {
    [1,2,3,4,5,7].map(item => 
      <SwiperSlide className='body-slide'>
       <div className='slide-image'>
    <img src='Slide/slide1.webp' alt="" />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide>
      )
  }
    
    {/* <SwiperSlide className='body-slide'>
    <div className='slide-image'>
    <img src='Slide/slide2.jpg' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
    <div className='slide-image'>
    <img src='Slide/slide3.jpg' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
    <div className='slide-image'>
    <img src='Slide/slide4.jpg' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
    <div className='slide-image'>
    <img src='Slide/slide5.jpg' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='body-slide'>
    <div className='slide-image'>
    <img src='Slide/slide6.jpg' />
    <div class="text-overlay">
    <p>Shoe for running  </p> 
    <h1 className='body-slide-text__title'>WELCOME TO MADEIN</h1>
    <p>Shop from the comfort of your home</p>
      <button> <Link to='/Shop'>Shop Now</Link></button>
    </div>
    </div>
    </SwiperSlide> */}
    </Swiper>
  )
}

export default Bodyslide