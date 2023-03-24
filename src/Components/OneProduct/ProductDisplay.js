import React from 'react';
import './Productdisplay.css';
import {BiCartAdd} from 'react-icons/bi';
import {FaCartPlus} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {AiFillStar} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function ProductDisplay(props) {
  return (
    <div className="proCards">
      <img src={props.imageUrl} alt={props.name}/>
      <div className="overview">
  <ul>
    <li>
     <Link to='/cart'><FaCartPlus className="iconx" /></Link> 
    </li>
    <li>
      <Link to='/Wishlist'><AiOutlineHeart className="iconx" /></Link>
    </li>
    <li>
     <Link to='/Buy'> <HiOutlineArrowNarrowRight className="iconx" /></Link>
    </li>
  </ul>
</div>
<div className="proDetails">
        <h2>{props.name}</h2>
        <div>
          {Array.from(Array(props.rating), (_, i) => (
            <span className='product-star' key={i}>
               <AiFillStar className="rate" />
            </span>
          ))}
        </div> 
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;


{/* <div className="proCards">
<img src={ING} alt="" />

<div className="proDetails">
  <h3>Classic hat</h3>
  <div className="reviws">
    <div className="rates">
     
      <AiFillStar className="rate" />
      <AiFillStar className="rate" />
      <AiFillStar className="rate" />
    </div>
    <p>(1 reviews)</p>
  </div>
  <small>$3000</small>
</div> */}