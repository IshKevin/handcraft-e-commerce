import React from 'react'
import './SubHeader.css'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'


const SubHeader = () => {
  return (
    <section>
        <div className='subheader-sect1'>
        <img src="Madein.PNG" alt='our log'/>
        </div>
        <div className='subheader-sect2'>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
         <input type='text' placeholder='Search' className='semnav-search'/>
        </div>
        <div className='subheader-sect3'>
        <div>
              <span>Live chat or:</span>
               <span>0784535454</span>
              </div>
              <div>
                <div>
                <button><AiOutlineHeart/></button>
                <span>wishlist</span>
                </div>
                <div>
                <button><GiInjustice/></button>
                <span>compare</span>
                </div>
                <div>
                <button><AiOutlineShoppingCart/></button>
                <span>cart</span>
                </div>
              </div>
        </div>
    </section>
  )
}

export default SubHeader