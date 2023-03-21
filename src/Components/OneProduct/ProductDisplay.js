import React from 'react';
import './Productdisplay.css';
import {BiCartAdd} from 'react-icons/bi';

function ProductDisplay(props) {
  return (
    <div className='product-disp-card'>
      <img src={props.imageUrl} alt={props.name} width={'120px'} height={'150px'}/>
      <div className='product-disp-card-text' style={{ color: 'black' }}>
        <h2>{props.name}</h2>
        <div>
          {Array.from(Array(props.rating), (_, i) => (
            <span className='product-star' key={i}>⭐</span>
          ))}
        </div>
        <p>{props.price}</p>
        <button>
          <BiCartAdd/>
          </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
