import React from "react";
import "./nav.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
import {Link} from 'react-router-dom';
import Header from "../header/Header";

const Nav = () => {
  return (
    <>
      <nav className="nav-page">
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
              <p>Live chat or :</p>
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
      </nav>
      <Header />
    </>
  );
};

export default Nav;
