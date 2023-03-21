import React from 'react'
import './CategoliesNav.css'
import {IoShirtOutline} from 'react-icons/io5'
import {MdSportsHandball} from 'react-icons/md'
import {BiBasketball} from 'react-icons/bi'
import {BiHomeSmile} from 'react-icons/bi'
import {MdOutlineElectricScooter} from 'react-icons/md'
import {MdBabyChangingStation} from 'react-icons/md'
import {FaMotorcycle} from 'react-icons/fa'
import {SiCultura} from 'react-icons/si'
import {BsBook} from 'react-icons/bs'
import {IoFastFoodOutline} from 'react-icons/io5'
import {MdPets} from 'react-icons/md'
import {MdCardTravel} from 'react-icons/md'
import {MdDevicesOther} from 'react-icons/md' 





const CategoliesNav = () => {
  return (
    <div className='categolies-nav'>
      <h1>Categolies</h1>
      <ul>
       <li> <IoShirtOutline/>  Fashion</li>
       <li><SiCultura/>  Made in rwanda</li>
       <li><MdSportsHandball/>  Sport</ li>
       <li><MdOutlineElectricScooter/>Electronics</li>
       <li><BiHomeSmile/>  Home and garden</li>
       <li>Health and beauty</li>
       <li><BiBasketball/>  Toys and hobbies</li>
       <li><FaMotorcycle/>  Automotive</li>
       <li><MdBabyChangingStation/>  Baby and kids</li>
       <li><BsBook/>  Books and stationery</li>
       <li><IoFastFoodOutline/>  Food and drinks</li>
       <li><MdPets/>  Pets</li>
       <li><MdCardTravel/>  Travel</li>
       <li><MdDevicesOther/>  Other</li>    
      </ul>
    </div>
  )
}

export default CategoliesNav