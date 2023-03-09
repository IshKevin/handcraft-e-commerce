import React from 'react'
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
        <div><a className='header-link' href="#">SignIn</a>/<a className='header-link' href="#">Register</a></div>
      </div>
    </div>
  </section>
  )
}

export default Header