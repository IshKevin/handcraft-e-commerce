import React from "react";
import "./nav.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";

import Header from "../header/Header";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="wel">
          <div className="container welcome">
            <h6>Welcome to madein hand craft</h6>
            <div className="Nav-register">
              <ul>
                <li>
                  <span>
                    <BiUserCircle />
                  </span>
                  signIn
                </li>
                <li>/</li>
                <li>register</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container search">
          <div className="icon_header">
            <HiOutlineBars3 className="boo" />
            <h1>MadeIn</h1>
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
              <p>live chat or :</p>
              <small>+250 785 161 508</small>
            </div>
            <div className="cwcontainer">
              <div className="cart">
                <span>
                  <AiOutlineHeart />
                </span>
                <small>Wishlist</small>
              </div>
              <div className="cart">
                <span>
                  <HiShoppingCart />
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
