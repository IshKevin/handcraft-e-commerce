import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import ING from "../../assets/ingo.jpg";
import ING1 from "../../assets/1.jpg";
import ING2 from "../../assets/2.jpg";
import ING3 from "../../assets/3.jpeg";
import ING4 from "../../assets/4.jpg";
import ING5 from "../../assets/5.jpg";
import ING6 from "../../assets/8.png";
import ING7 from "../../assets/7.png";
import ADVT from "../../assets/makeup.jpg";
import ADVT1 from "../../assets/wo.jpg";
import "./pro.css";
const Products = () => {
  return (
    <>
      <section id="product">
        <div className="container productheader">
          <h1>Popular Products</h1>
          <div className="moreProduct">
            <h2>More Product</h2>
            <span>
              <MdArrowRightAlt />
            </span>
          </div>
        </div>
        <div className=" container cardProduct">
          <div className="proCards">
            <img src={ING} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING1} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING2} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING3} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING4} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING5} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING6} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
          <div className="proCards">
            <img src={ING7} alt="" />
            <div className="overview">
              <ul>
                <li>
                  {" "}
                  <FaCartPlus className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineHeart className="iconx" />{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineArrowNarrowRight className="iconx" />{" "}
                </li>
              </ul>
            </div>
            <div className="proDetails">
              <h3>Classic hat</h3>
              <div className="reviws">
                <div className="rates">
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p>(1 reviews)</p>
              </div>
              <small>$3000</small>
            </div>
          </div>
        </div>
      </section>
      <div className="advat container">
        <div className="advatCard">
          <img src={ADVT} alt="" />
          <div className="overlay"></div>
          <div className="advatDeatils">
            <p>
              <small>Natural Process</small>
              <br />
              <b>Cosmetic MakeUp</b>
              <br />
             <b>Profeshional</b> 
            </p>
            <small>
              Shop now <span>5000 FRW</span>
            </small>
          </div>
        </div>
        <div className="advatCard">
          <img src={ADVT1} alt="" />
          <div className="overlay"></div>
          <div className="advatDeatils">
            <p>
              <small>Trending Now</small>
              <br />
              <b>Women's Lifestyle</b> 
              <br />
              collection
            </p>
            <small>
              Shop Now <span>9000 FRW</span>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;


