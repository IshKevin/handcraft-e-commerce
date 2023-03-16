import React from 'react';
import './Productdisplay.css';

function ProductDisplay(props) {
  return (
    <div className='product-disp-card'>
      <img src={props.imageUrl} alt={props.name} width={'120px'} height={'150px'}/>
      <div className='product-disp-card-text' style={{ color: 'grey' }}>
        <h2>{props.name}</h2>
        <div>
          {Array.from(Array(props.rating), (_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
