import React from 'react'
import { Link } from 'react-router-dom'
import {RxAvatar} from 'react-icons/rx'
import './Header.css'


const Header = () => {
  return (
    <section className='Home-header'>
    <div className='header-sect1' >
      <p className='header-p'>
        Welcome to made in rwanda handcrafted website
      </p>
      <div className='header-sect1-left'>
        <div>
        <RxAvatar className='Header-icon'/>
        </div>
        <div><Link to='./Login' className='header-link' >SignIn</Link>/<Link to='/AdminDashboard' className='header-link'>Register</Link></div>
      </div>
    </div>
  </section>
  )
}

export default Header