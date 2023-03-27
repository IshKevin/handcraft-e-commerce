import React from 'react'
import './SubHeader.css'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineDiscount} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {HiShoppingCart} from 'react-icons/hi'
import {IoPricetagsOutline} from 'react-icons/io5'
import {AiOutlineBars} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'






const SubHeader = () => {
  return (
    <>
   <div className='nav-page'>
    {/* <section className='subHeader' >
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
                <button>
                  <Link to='/Cart'>
                <AiOutlineShoppingCart/>
                </Link>
                </button><br/>
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
    
     </div> */}

<div className="container search">
          <div className="icon_header">
          <img src="Madein.PNG" alt='our log'/>
          </div>
          <div className="input_search">
            <select name="allCategories" id="">
              <option value="">All Category</option>
              <option value="">Shoes</option>
              <option value="">funiture</option>
              <option value="">technology</option>
              <option value="">t shirt</option>
            </select>
            <input type="text" placeholder="Search In" />
            <span className="searchIcon">
              <BiSearch />
            </span>
          </div>
          <div className="cartWishlist">
            <div className="contact">
              <p>live chat or :</p>
              <small>+250 785 161 508</small>
            </div>
            <div className="cwcontainer">
              <div className="cart">
              <span>
                  <Link to='/Wishlist'><AiOutlineHeart /></Link>
                </span>
                <small>Wishlist</small>
              </div>
              <div className="cart">
                <span>
                <Link to='/Cart'><HiShoppingCart /></Link>
                </span>
                <small>Cart</small>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="navBar">
        <div className="container subNav">
          <div className="categories">
            <span>
              <AiOutlineBars />
            </span>
            <div className="pdetails">
              <p>BrowseCategory</p>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
          <div className="links">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Shop'>Shop</Link></li>
              <li><Link to='/Vender'>Vendor</Link></li>
              <li>About us</li>
            </ul>
          </div>
          <div className="trackOrders">
            <div className="track">
              <span>
                <GoLocation />
              </span>
              <p>Track Order</p>
            </div>
            <div className="track">
              <span>
                <IoPricetagsOutline />
              </span>
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubHeader