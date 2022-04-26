import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CartPageComponentWomen.css";
import headerArrow from "../../img/filter-icons/arrow-link.svg";
import share from "../../img/filter-icons/share.svg";
import StarsCart from "../StarsCart/StarsCart";
import hanger from "../../img/cart/hanger.svg";
import heart from "../../img/cart/heart.svg";
import scales from "../../img/cart/scales.svg";
import car from "../../img/cart/car-cart.svg";
import refresh from "../../img/cart/refresh-cart.svg";
import mail from "../../img/cart/mail-cart.svg";
import starbigyellow from "../../img/stars/big-star.svg";
import starbiggrey from "../../img/stars/big-grey.svg";
import write from "../../img/cart/write.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  objProductWomens,
  createUniqueCartColor,
  womensMainPageProducts,
} from "../../data/root";
import { Link } from "react-router-dom";
import ButtonCartWomen from "../ButtonCartWomen/ButtonCartWomen";

function CartPageComponentWomen({ routeId }) {
  const cartWomenParams = objProductWomens[`${routeId}`];
  const cartWomenImages = objProductWomens[`${routeId}`].images;
  const cartWomenSize = objProductWomens[`${routeId}`].sizes;
  const cartWomenPrice = objProductWomens[`${routeId}`].price;
  const cartWomenReviews = objProductWomens[`${routeId}`].reviews;
  const arrCartColor = createUniqueCartColor(cartWomenImages, "color");

  const [sizeStateWomens, setSizeStateWomens] = useState(0);
  const handleUpdateSizeWomen = (index) => {
    setSizeStateWomens(index);
  };

  const [colorStateWomens, setcolorStateWomens] = useState(0);
  const handleUpdateColorWomen = (index) => {
    setcolorStateWomens(index);
  };

  let newArrColorWomens = cartWomenImages
    .sort(function (a, b) {
      return a.color > b.color ? -1 : 1;
    })
    .reduce(function (arr, el) {
      if (!arr.length || arr[arr.length - 1].color !== el.color) {
        arr.push(el);
      }
      return arr;
    }, []);

  const cartProductWomen = {
    id: `${cartWomenParams.id}${cartWomenSize[sizeStateWomens]}${newArrColorWomens[colorStateWomens].color}`,
    name: cartWomenParams.name,
    size: cartWomenSize[sizeStateWomens],
    color: newArrColorWomens[colorStateWomens].color,
    pictureUrl: newArrColorWomens[colorStateWomens].url,
    price: cartWomenParams.price,
    countProd: 1,
  };

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="cart-page" data-test-id={`product-page-women`}>
      <div className="cart-page__navigation">
        <div className="container">
          <div className="womens-cart-h__title">
            <div className="womens-cart-h__title-link">
              <div className="womens-cart-h__title-item">
                <Link to={`/`}>
                  <p className="womens-cart-h__title-text womens-cart-h__home-link">
                    Home
                  </p>
                </Link>
                <img
                  className="womens-cart-h__title-arrow"
                  src={headerArrow}
                  alt="headerArrow"
                />
                <Link to={`/women/`}>
                  <p className="womens-cart-h__title-text womens-cart-h__women-link">
                    Women
                  </p>
                </Link>

                <img
                  className="womens-cart-h__title-arrow"
                  src={headerArrow}
                  alt="headerArrow"
                />
                <p className="womens-cart-h__title-text womens-cart-h__title-link_item">
                  {cartWomenParams.name}
                </p>
              </div>
              <div className="womens-cart-h__title-item">
                <a href="#share" className="womens-cart-h__title-links">
                  <img src={share} alt="share" />
                </a>
                <p className="womens-cart-h__title-text womens-h__share-link">
                  Share
                </p>
              </div>
            </div>
            <div className="womens-cart-h__title-block">
              <h3 className="womens-cart-h__title-women">
                {cartWomenParams.name}
              </h3>
            </div>
            <div className="womens-cart-h__star-code">
              <div className="womens-cart-h__star">
                <StarsCart cartRating={cartWomenParams.rating} />
                <p className="womens-cart-h__star-text">
                  {cartWomenParams.reviews.length} Reviews
                </p>
              </div>
              <div className="womens-cart-h__code">
                <p className="womens-cart-h__code-text">SKU:</p>
                <span className="womens-cart-h__code-text_span">777</span>
                <p className="womens-cart-h__code-text womens-cart-h__code-text_avail">
                  Availability:
                </p>
                <span className="womens-cart-h__code-text_span">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-page__picture-main-wrap">
        <div className="container">
          <div className="cart-page__picture-main">
            <div className="cart-page__picture-img">
              <div className="cart-page__picture-img-block">
                <div className="cart-page__picture-img-small">
                  <div className="cart__img-small-flex">
                    <Swiper
                      data-test-id="product-slider"
                      modules={[FreeMode, Navigation, Thumbs, Controller]}
                      className="mySwiperSmall"
                      navigation={true}
                      slidesPerView={4}
                      onSwiper={setThumbsSwiper}
                    >
                      {cartWomenImages.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              className="cart__img-small"
                              src={`https://training.cleverland.by/shop/${item.url}`}
                              alt="img"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>

                <div className="cart-page__picture-img-big">
                  <div className="cart-page__picture-img-buttons">
                    <Swiper
                      modules={[FreeMode, Navigation, Thumbs, Controller]}
                      className="mySwiperBigTwo"
                      thumbs={{ swiper: thumbsSwiper }}
                      slidesPerView={1}
                      navigation={true}
                      onSwiper={setFirstSwiper}
                      controller={{ control: secondSwiper }}
                    >
                      {cartWomenImages.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              className="cart__img-big-two"
                              src={`https://training.cleverland.by/shop/${item.url}`}
                              alt="img"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  <Swiper
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs, Controller]}
                    className="mySwiperBig"
                    slidesPerView={1}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                  >
                    {cartWomenImages.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img
                            className="cart__img-big"
                            src={`https://training.cleverland.by/shop/${item.url}`}
                            alt="img"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="cart-page__picture-text">
              <div className="cart-page__picture-color">
                <p className="cart-page__picture-color_text">color:</p>
                <span className="cart-page__color-span">
                  {newArrColorWomens[colorStateWomens].color}
                </span>
              </div>
              <div className="cart-page__picture-mini-img">
                {newArrColorWomens.map((item, index) => {
                  return (
                    <img
                      key={index}
                      className={
                        colorStateWomens === index
                          ? "mini-img active-mini"
                          : "mini-img"
                      }
                      src={`https://training.cleverland.by/shop/${item.url}`}
                      alt="mini-img"
                      onClick={() => handleUpdateColorWomen(index)}
                    />
                  );
                })}
              </div>
              <div className="cart-page__picture-size">
                <p className="cart-page__picture-size_text">size:</p>
                <span className="cart-page__size-span">
                  {cartWomenSize[sizeStateWomens]}
                </span>
              </div>
              <ul className="cart-page__picture-size-block">
                {cartWomenSize.map((item, index) => {
                  return (
                    <li className="cart-page__picture-size-item" key={index}>
                      <button
                        className={
                          sizeStateWomens === index
                            ? "cart-page__picture-size-btn active-cart-btn"
                            : "cart-page__picture-size-btn"
                        }
                        type="button"
                        onClick={() => handleUpdateSizeWomen(index)}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="cart-page__hanger">
                <img className="hanger-img" src={hanger} alt="hanger" />
                <p className="cart-page__hanger-text">Size guide</p>
              </div>
              <div className="cart-page__price">
                <h3 className="cart-page__price-item cart-page__price-number">
                  $ {cartWomenPrice}
                </h3>

                {/* <button className="cart-page__price-item cart-page__price-btn">
                  Add to card
                </button> */}

                <ButtonCartWomen cartProductWomen={cartProductWomen} />

                <button className="cart-page__price-item cart-page__price-heart">
                  <img
                    className="cart-page__price-heart-img"
                    src={heart}
                    alt="heart"
                  />
                </button>
                <button className="cart-page__price-item cart-page__price-scales">
                  <img
                    className="cart-page__price-scales-img"
                    src={scales}
                    alt="scales"
                  />
                </button>
              </div>
              <ul className="cart-page__info">
                <li className="cart-page__info-item cart-page__info-car">
                  <img className="cart-page__info-img" src={car} alt="car" />
                  <p className="cart-page__info-text">
                    Shipping &amp; Delivery
                  </p>
                </li>
                <li className="cart-page__info-item cart-page__info-refresh">
                  <img
                    className="cart-page__info-img"
                    src={refresh}
                    alt="refresh"
                  />
                  <p className="cart-page__info-text">
                    Returns &amp; Exchanges
                  </p>
                </li>
                <li className="cart-page__info-item">
                  <img className="cart-page__info-img" src={mail} alt="mail" />
                  <p className="cart-page__info-text">Ask a question</p>
                </li>
              </ul>
              <div className="cart-page__creditcards">
                <div className="cart-page__creditcards-item">
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-stripe.png")}
                    alt="stripe"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-aes.png")}
                    alt="aes"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-paypal.png")}
                    alt="paypal"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-visa.png")}
                    alt="visa"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-mastercard.png")}
                    alt="mastercard"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-discover.png")}
                    alt="discover"
                  />
                  <img
                    className="cart-page__creditcards-img"
                    src={require("../../img/cart/credit-american.png")}
                    alt="american"
                  />
                </div>
                <p className="cart-page__creditcards-text">
                  guaranteed safe checkout
                </p>
              </div>
              <div className="cart-page__description">
                <p className="cart-page__description-text">description</p>
              </div>
              <div className="cart-page__information">
                <h3 className="cart-page__information-title">
                  additional information
                </h3>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span">
                    color:
                  </span>
                  {arrCartColor.map((item, index) => {
                    return (
                      <span
                        className="cart-page__information-text_span"
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span">
                    size:
                  </span>
                  {cartWomenSize.map((item, index) => {
                    return (
                      <span
                        className="cart-page__information-text_span cart-page__span-text"
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                <div className="cart-page__information-item">
                  <span className="cart-page__information-title_span cart-page__title_percent">
                    material:
                  </span>
                  <span className="cart-page__information-text_span">
                    {cartWomenParams.material}
                  </span>
                </div>
              </div>
              <div className="cart-page__reviews">
                <h3 className="cart-page__reviews-title">reviews</h3>
                <div className="cart-page__reviews-stars-block">
                  {cartWomenReviews.length > 0 ? (
                    <div className="cart-page__reviews-stars">
                      <div className="cart-page__stars-img">
                        <img
                          className="cart-page__reviews-img"
                          src={starbigyellow}
                          alt="star-big-yellow"
                        />
                        <img
                          className="cart-page__reviews-img"
                          src={starbigyellow}
                          alt="star-big-yellow"
                        />
                        <img
                          className="cart-page__reviews-img"
                          src={starbigyellow}
                          alt="star-big-yellow"
                        />
                        <img
                          className="cart-page__reviews-img"
                          src={starbigyellow}
                          alt="star-big-yellow"
                        />
                        <img
                          className="cart-page__reviews-img"
                          src={starbiggrey}
                          alt="star-big-grey"
                        />
                      </div>
                      <p className="cart-page__stars-text">
                        {cartWomenReviews.length} Reviews
                      </p>
                    </div>
                  ) : null}

                  <div className="cart-page__reviews-write-block">
                    <img className="write-img" src={write} alt="write" />
                    <p className="write-text">Write a review</p>
                  </div>
                </div>
                {cartWomenReviews.length > 0
                  ? cartWomenReviews.map((item, index) => {
                      return (
                        <div className="cart-page__reviews-author" key={index}>
                          <div className="cart-page__author">
                            <div className="cart-page__author-block-star">
                              <p className="cart-page__author-name">
                                {item.name}
                              </p>
                              <StarsCart cartRating={item.rating} />
                            </div>
                          </div>
                          <p className="cart-page__author-text">{item.text}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-page__product">
        <div className="container">
          <div className="womens-cart-block">
            <div className="cart-page__product-block">
              <h3 className="cart-page__product-title">related products</h3>
              <div className="cart-page__product-img-btns"></div>
            </div>
            <Swiper
              data-test-id="related-slider"
              className="mySwiper-two"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                560: {
                  slidesPerView: 2,
                },
                858: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {womensMainPageProducts.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`/women/${item.id}`}>
                      <div className="womens-cart womens-cart-slider">
                        <div href="womens" className="men-cart__link">
                          <img
                            className="womens-cart__img"
                            src={`https://training.cleverland.by/shop/${item.images[0].url}`}
                            alt="womens-img"
                          />
                          <p className="womens-cart__text">{item.name}</p>
                          <div className="womens-cart__stars">
                            <div className="womens-cart__price-sale">
                              <span className="womens-cart__stars-text">
                                $ {item.price}
                              </span>
                            </div>
                            <StarsCart cartRating={item.rating} />
                          </div>
                          {item.discount ? (
                            <div className="womens-percent womens-percent-cart">
                              <p className="womens-percent__text">
                                {item.discount}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPageComponentWomen;

CartPageComponentWomen.propTypes = {
  routeId: PropTypes.string.isRequired,
};
