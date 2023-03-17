import React from 'react'
import './SubHeader.css'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineDiscount} from 'react-icons/md'
import {Link} from 'react-router-dom'


const SubHeader = () => {
  return (
   <div>
    <section className='subHeader' >
        <div className='subheader-sect1'>
        <img src="Madein.PNG" alt='our log'/>
        </div>
        <div className='subheader-sect2'>
        <select className='subheader-select'>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
         <input type='text' placeholder='Search' className='semnav-search'/>
        </div>
        <div className='subheader-sect3'>
          <div>
           <span>Live chat or:</span> <br/>
            <span>0784535454</span>
          </div>
        <div className='subheader-logs'>
            <div>
            <button><AiOutlineHeart/></button><br/>
            <span>wishlist</span>
            </div>
                <div>
                <button><GiInjustice/></button><br/>
                <span>compare</span>
                </div>
                <div>
                <button><AiOutlineShoppingCart/></button><br/>
                <span>cart</span>
                </div>

         </div>
        </div>
    
    </section>
     <div className='subheader-footer'>
     <select className='subheader-select2'>
          <option value="option1"> Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className='nav-link'>
        <Link  to='../'className='nav-link'>Home</Link>
        <Link to='/Shop'className='nav-link'>Shop</Link>
        <Link to='/vender ' className='nav-link'>Vender</Link>
        <Link to='#'className='nav-link'>About</Link>
        </div>
        <div>
            <MdOutlineLocationOn/> Track your order
            <MdOutlineDiscount/> Dialy Deals 
        </div>
    
     </div>
    </div>

  )
}

export default SubHeader