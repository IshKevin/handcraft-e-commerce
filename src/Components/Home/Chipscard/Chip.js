import React from 'react'
import './Chip.css'
import {Link} from 'react-router-dom'

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
        <div className='chip-view1'>
          <div>
            <h1>MEN FASHION</h1>
            <button> <Link to='#'>view all </Link> </button>
          </div>
          <div>
            <img src={'Home/jordan.jpg'} alt='men shoes' />
          </div>
        </div>
        <div className='chip-view2'>
          <div>
            <h1>Tvs</h1>
            <button> <Link to='#'>view all </Link> </button>
          </div>
          <div>
            <img src='Home/jordan.jpg' alt='men shoes'/>
          </div>
        </div>
      </div>
      <div className='chips-card3_img'>
      <div className='chip-view3'>
          <div>
            <h1> ACCESORIES</h1>
            <button> <Link to='#'>view all </Link> </button>
          </div>
          <div>
            <img src='Home/jordan.jpg' alt='men shoes'/>
          </div>
        </div>
        <div className='chip-view4'>
          <div>
            <h1>JAWERY</h1>
            <button> <Link to='#'>view all </Link> </button>
          </div>
          <div>
            <img src='Home/jordan.jpg' alt='men shoes'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chip