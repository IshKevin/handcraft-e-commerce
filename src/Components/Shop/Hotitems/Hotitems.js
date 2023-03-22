import React from 'react'
import './Hotitems.css'

const Hotitems = () => {
  return (
    <div>
        <div className='hot-items'>
            <h1>Hot items</h1>
            <div className='hot-items-container'>
                <div className='hot-items-img1'>
                    <img src="/Slide/slide7.jpeg" alt="hotitems"/>
                    <h1>Made in Rwanda T-shirt</h1>
                 </div>
                <div className='hot-items-img2'>
                    <img src="/Slide/slide7.jpeg" alt="hotitems"/>
                    <h1>Made in Rwanda T-shirt</h1>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default Hotitems