import React from 'react'
import { Link } from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import './Header.css'


const Header = () => {
  return (
    <div className="welcome-home">
          <div className="container welcome">
            <h6>Welcome to made in RWANDA hand craft</h6>
            <div className="Nav-register">
              <ul>
                <li>
                  <span>
                    <BiUserCircle />
                  </span>
                  <Link to='./Login'>signIn</Link>
                </li>
                <li>/</li>
                <li>
                <Link to='/Signup'>register</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Header