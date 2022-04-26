import React from "react";
import "./Header.css";
import banner from "../../img/banner/banner.jpg";
// import btnLeft from "../../img/banner/arrow-left.png";
// import btnRight from "../../img/banner/arrow-right.png";
import women from "../../img/banner/women.jpg";
import men from "../../img/banner/men.jpg";
import accessories from "../../img/banner/accesories.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

function Header() {
  return (
      <header className="header" data-test-id="header">
        <div className="container">
          <div className="header-block">
            <div className="header-block__banner">
              <div className="header-block__banner-slider">
                <Swiper
                  data-test-id="main-slider"
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper-one"
                >
                  <SwiperSlide>
                    <img
                      className="header-block__img-slider"
                      src={banner}
                      alt="banner"
                    />
                    <div className="header-block__banner-text">
                      <p className="header-block__banner-p">Banner</p>
                      <h3 className="header-block__banner-title">
                        your Title text
                      </h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="header-block__img-slider"
                      src={banner}
                      alt="banner"
                    />
                    <div className="header-block__banner-text">
                      <p className="header-block__banner-p">Banner</p>
                      <h3 className="header-block__banner-title">
                        your Title text
                      </h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="header-block__img-slider"
                      src={banner}
                      alt="banner"
                    />
                    <div className="header-block__banner-text">
                      <p className="header-block__banner-p">Banner</p>
                      <h3 className="header-block__banner-title">
                        your Title text
                      </h3>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="header-block__product">
              <div className="header-block__product-item header-block__product-people">
                <div className="header-product__women">
                  <img
                    className="header-product__women-img"
                    src={women}
                    alt="women"
                  />
                  <div className="header-product__women-text">
                    <h3 className="header-product__women-title">Women</h3>
                  </div>
                </div>
                <div className="header-product__men">
                  <img
                    className="header-product__men-img"
                    src={men}
                    alt="men"
                  />
                  <div className="header-product__men-text">
                    <h3 className="header-product__men-title">Men</h3>
                  </div>
                </div>
              </div>

              <div className="header-block__product-item header-block__product-accse">
                <img
                  className="product-item__accse-img"
                  src={accessories}
                  alt="accessories"
                />
                <div className="product-item__accse-text">
                  <h3 className="product-item__accse-title">Accessories</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
