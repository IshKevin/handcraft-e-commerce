import React from 'react'
import './venderBody.css'

const VenderBody = () => {
  return (
    <>
    <div className='vender-card-layout'>
    <div className="vender-card-layout__item">
        <div className='vender-adderss'>
        <div className='vender-adderss__item'>
        <h1>UMUSHANANA SHOP</h1>
        <span>Huye-Rwanda</span>
        <span>phone</span>
        </div>
        <div className='vender-adderss__item'>
        <div className="vender-body-avatar">
          <img className="vender-avatar__image" src="Home/download.jpg" />
        </div>
        </div>
        </div>
        <p>Umushanana shop is a shop that sells <br/>
        all kinds of clothes and shoes</p>
    </div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    <div className="vender-card-layout__item">...</div>
    </div>
    </>
  )
}

export default VenderBody