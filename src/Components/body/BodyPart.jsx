import React from "react";
import { AiFillCar } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import ADVT from "../../assets/shoe.jpg";
import ADVT1 from "../../assets/banner.jpg";
import "./body.css";
import TopCat from "../TopCategories/TopCat";
const BodyPart = () => {
  return (
    <>
      <section id="bodypart">
        <div className="container payments">
          <div className="payMentCards">
            <span>
              <AiFillCar />
            </span>
            <div className="payDetails">
              <p>Free Shipping & Returns</p>
              <small>for all orders in $99</small>
            </div>
          </div>
          <div className="payMentCards">
            <span>
              <TfiBag />
            </span>
            <div className="payDetails">
              <p>Secure PayMent</p>
              <small>we ensure secure payment</small>
            </div>
          </div>
          <div className="payMentCards">
            <span>
              <FiFolderPlus />
            </span>
            <div className="payDetails">
              <p>Money Back Grauntee</p>
              <small>any back with 30days</small>
            </div>
          </div>
          <div className="payMentCards">
            <span>
              <HiOutlineChatBubbleLeftRight />
            </span>
            <div className="payDetails">
              <p>Customer Support</p>
              <small>call or email us 24/7</small>
            </div>
          </div>
        </div>

        <div className="advat container">
          <div className="advatCard">
            <img src={ADVT} alt="" />
            <div className="overlay"></div>
            <div className="advatDeatils">
              <p>
                Get Up to <span>20% off</span>
                <br />
                <b>KID'S OUTFITS</b> collection
              </p>
              <small>
                Starting at <span>5000 FRW</span>
              </small>
            </div>
          </div>
          <div className="advatCard">
            <img src={ADVT1} alt="" />
            <div className="overlay"></div>
            <div className="advatDeatils">
              <p>
                New Arrivals
                <br />
                <b>ACCESSORIES</b> Collection
              </p>
              <small>
                only From <span>9000 FRW</span>
              </small>
            </div>
          </div>
        </div>
      </section>
      <TopCat />
    </>
  );
};

export default BodyPart;
