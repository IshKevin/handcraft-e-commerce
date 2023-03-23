import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ME from "../../assets/ikote.jpg";
import ME1 from "../../assets/hoe.jpg";
import ME2 from "../../assets/fashion.jpg";
import ME3 from "../../assets/fun.webp";
import ME4 from "../../assets/shoe.jpg";
import ME5 from "../../assets/shoe2.jpg";
import ME6 from "../../assets/shoes1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";
import BodyPart from "../body/BodyPart";

const MainHeader = () => {
  return (
    <>
      <section className="slideslide">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME1} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Men's</u>
                </h5>
                <h1>Runing Shoes</h1>
                <p>
                  sale up to <span>30% OFF</span>{" "}
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME6} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Street's</u>
                </h5>
                <h1>Streets Thougt Stores</h1>
                <p>
                  sale up to <span>10% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME4} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Kid's</u>
                </h5>
                <h1>Boyz and Girls Shoes Stores</h1>
                <p>
                  sale up to <span>10% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Men's</u>
                </h5>
                <h1>Raining Jucket</h1>
                <p>
                  sale up to <span>30% OFF</span>{" "}
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME2} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>pillo's</u>
                </h5>
                <h1>Fashion's available</h1>
                <p>
                  sale up to <span>30% OFF</span>{" "}
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shop_one">
              <img src={ME3} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Funitures's</u>
                </h5>
                <h1>Funiture Accesoires Stores</h1>
                <p>
                  sale up to <span>30% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME4} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Kid's</u>
                </h5>
                <h1>Bolls kid's Stores</h1>
                <p>
                  sale up to <span>10% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME5} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Girl's</u>
                </h5>
                <h1>Women % Girl fashion Stores</h1>
                <p>
                  sale up to <span>10% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_one">
              <img src={ME6} alt="" />
              <div className="overlay_s"></div>
              <div className="right_overlay">
                <h5>
                  custom <u>Street's</u>
                </h5>
                <h1>Streets Thougt Stores</h1>
                <p>
                  sale up to <span>10% OFF</span>
                </p>
                <div className="btnContainer">
                  <button className="btns">
                    Explore More <HiOutlineArrowNarrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <BodyPart />
    </>
  );
};

export default MainHeader;
