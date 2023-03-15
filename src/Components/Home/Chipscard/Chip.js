import React from 'react'
import './Chip.css'

const Chip = () => {
  return (
    <>
    <div className='chips-card1'>
      <div className='chips-card1_img'>
        <img src='Home/sport.jpg' alt='sport'/>
        <div className='chip-text-cont'>
        <p>Get up to <span>20 % OFF</span><br/>
        SPORT OUTFIT COLLECTION <br/>
        COLLECTION<br/>
        <small> starting at <span>17 000Rwf</span></small></p>
        </div>
      </div>
      <div className='chips-card2_img'>
        <img src='Home/liquer.jpg' alt='sport'/>
        <p>New arrivals <span>50 % OFF</span><br/>
        ACCESSORIES COLLLECTION <br/>
        COLLECTION<br/>
        <small> only from <span>45000 Rwf</span></small></p>
        </div>
    </div>
    <div className='chips-card2'>
      <div className='chips-card3_img'>
        <div>chip1</div>
        <div>chip2</div>
      </div>
      <div className='chips-card3_img'>
        <div>chip3</div>
        <div>chip4</div>
      </div>
    </div>
    </>
  )
}

export default Chip