import React from 'react'
import './Deals.css'
import {AiFillCar} from 'react-icons/ai'
import {CgToolbox} from 'react-icons/cg'
import {BiSupport} from 'react-icons/bi'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'

const Deals = () => {
  return (
    <div>
      <div className='deals-sect'>
        <div>
          <span><h1><AiFillCar/></h1></span>
         <span> <p>
          <b>Free Shipping & Returns</b><br/>
          For all order in $99</p> </span>
        </div>
        <div>
          <span><h1><CgToolbox/></h1></span>
          <span><p>
          <b>Secure Payment </b><br/>
          We ensure secure payment </p></span>
          </div>
        <div>
          <span><h1><BsFillCreditCard2BackFill/></h1></span>
         <span><p>
          <b>Money Back Graunte</b><br/>
          Any back in 30 days</p></span>
          </div>
        
        <div>
         <span> <h1><BiSupport/></h1></span>
          <span><p>
          <b>Customer support</b><br/>
          call or email us 24/7</p></span>
          </div>
          </div>
    </div>
  )
}

export default Deals