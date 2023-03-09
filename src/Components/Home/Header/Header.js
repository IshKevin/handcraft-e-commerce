import React from 'react'

const Header = () => {
  return (
    <section className='Home-header'>
    <div className='header-sect1' >
      <p>
        Welcome to made in rwanda handcrafted website
      </p>
      <div className='header-sect1-left'>
        <div>
        {/* <RxAvatar className='TopNav-icon'/> */}
        </div>
        <div><a className='header-link' href="#">SignIn</a>/<a className='topnav-link' href="#">Register</a></div>
      </div>
    </div>
  </section>
  )
}

export default Header