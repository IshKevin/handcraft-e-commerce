import React from "react";
import "./top.css";
import TOP from "../../assets/fasho.avif";
import TOP1 from "../../assets/fun.webp";
import TOP2 from "../../assets/tek.jpg";
import TOP3 from "../../assets/food1.jpg";
import Products from "../Products/Products";
const TopCat = () => {
  return (
    <div>
      <section className="topSection">
        <h2>Top Categories</h2>
        <div className="container topCat">
          <div className="topCatCard">
            <img src={TOP} alt="" />
            <div className="rotate"></div>
            <div className="overlay"></div>
            <div className="topCatDetails">
              <h1>Fashions</h1>
            </div>
          </div>
          <div className="topCatCard">
            <img src={TOP1} alt="" />
            <div className="rotate"></div>
            <div className="overlay"></div>
            <div className="topCatDetails">
              <h1>Funitures</h1>
            </div>
          </div>
          <div className="topCatCard">
            <img src={TOP2} alt="" />
            <div className="rotate"></div>
            <div className="overlay"></div>
            <div className="topCatDetails">
              <h1>Technology</h1>
            </div>
          </div>
          <div className="topCatCard">
            <img src={TOP3} alt="" />
            <div className="rotate"></div>
            <div className="overlay"></div>
            <div className="topCatDetails">
              <h1>Foods</h1>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default TopCat;
