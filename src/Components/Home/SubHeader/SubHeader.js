import React from 'react'
import './SubHeader.css'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineDiscount} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import {Link} from 'react-router-dom'
import Cart from '../../Pages/Cart/Cart'


const SubHeader = () => {
  return (
   <div>
    <section className='subHeader' >
        <div className='subheader-sect1'>
        <img src="Madein.PNG" alt='our log'/>
        </div>
        <div className='subheader-sect2'>
        <select className='subheader-select'>
        <option value="option1"> Categories </option>
          <option value="option2">FASHION</option>
          <option value="option3">Made in rwanda</option>
          <option value="option3">Sport</option>
          <option value="option3">Electronics</option>
          <option value="option3">Home and garden</option>
          <option value="option3">Health and beauty</option>
          <option value="option3">Toys and hobbies</option>
          <option value="option3">Automotive</option>
          <option value="option3">Baby and kids</option>
          <option value="option3">Books and stationery</option>
          <option value="option3">Food and drinks</option>
          <option value="option3">Pets</option>
          <option value="option3">Travel</option>
          <option value="option3">Other</option>
        </select>
         <input type='text' placeholder='Search' className='semnav-search'/>
         <button className='subheader-btn'><GoSearch/></button>
        </div>
        <div className='subheader-sect3'>
          <div>
           <p className='live-chat'>Live chat or:</p> <br/>
            <p>0784535454</p>
          </div>
        <div className='subheader-logs'>
            <div>
            <button><AiOutlineHeart/></button><br/>
            <div>wishlist</div>
            </div>
                <div>
                <button><GiInjustice/></button><br/>
                <div>compare</div>
                </div>
                <div>
                <button><Link to='./Cart/Cart'><AiOutlineShoppingCart/></Link></button><br/>
                <div>cart</div>
                </div>

         </div>
        </div>
    
    </section>
     <div className='subheader-footer'>
     <select className='subheader-select2'>
          <option value="option1"> categories </option>
          <option value="option2">FASHION</option>
          <option value="option3">Made in rwanda</option>
          <option value="option3">Sport</option>
          <option value="option3">Electronics</option>
          <option value="option3">Home and garden</option>
          <option value="option3">Health and beauty</option>
          <option value="option3">Toys and hobbies</option>
          <option value="option3">Automotive</option>
          <option value="option3">Baby and kids</option>
          <option value="option3">Books and stationery</option>
          <option value="option3">Food and drinks</option>
          <option value="option3">Pets</option>
          <option value="option3">Travel</option>
          <option value="option3">Other</option>
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