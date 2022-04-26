import React from "react";
import "./Navigation.css";
import PropTypes from "prop-types";
import phone from "../../img/icon-nav/phone.svg";
import local from "../../img/icon-nav/local.svg";
import clock from "../../img/icon-nav/clock.svg";
import facebook from "../../img/icon-nav/facebook.svg";
import twitter from "../../img/icon-nav/twitter.svg";
import instagram from "../../img/icon-nav/instagram.svg";
import pintrest from "../../img/icon-nav/pinterest.svg";
import search from "../../img/icon-nav/search.svg";
import globe from "../../img/icon-nav/globe.svg";
import user from "../../img/icon-nav/user.svg";
import shop from "../../img/icon-nav/shop.svg";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation({ showLink, handleShowLink, handleShowCart }) {
  const productsMens = useSelector((state) => state.cart.itemsInCart);
  const productsWomens = useSelector((state) => state.cart.itemsInCartWomens);
  const productsMensAndWomens = [...productsMens, ...productsWomens];


  return (
      <section className="navigation">
        <div className="nav-up-block">
          <div className="container">
            <div className="nav-up">
              <div className="nav-up__place">
                <ul className="nav-up__place-block">
                  <li className="nav-up__item">
                    <img className="nav-up__img" src={phone} alt="phone" />
                    <p className="number-phone-clock">+375 29 100 20 30</p>
                  </li>
                  <li className="nav-up__item nav-up__item_local">
                    <img className="nav-up__img" src={local} alt="local" />
                    <p className="local-text">Belarus, Gomel, Lange 17</p>
                  </li>
                  <li className="nav-up__item">
                    <img className="nav-up__img" src={clock} alt="clock" />
                    <p className="number-phone-clock">All week 24/7</p>
                  </li>
                </ul>
              </div>
              <div className="nav-up__links">
                <ul className="nav-up__links-block">
                  <li className="nav-up__item-link">
                    <a href="https://www.facebook.com/">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://twitter.com/i/flow/login">
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://www.instagram.com/">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </li>

                  <li className="nav-up__item-link">
                    <a href="https://www.pinterest.com/">
                      <img src={pintrest} alt="pintrest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-down-block">
          <div className="container">
            <div className="nav-down" data-test-id="menu">
              <div className="nav-down__logo-links">
                <Link
                  className="nav-down__title-link"
                  to="/"
                  data-test-id="header-logo-link"
                >
                  <h1 className="nav-down__logo">CleverShop</h1>
                </Link>
                <ul
                  className={`nav-down__list-links ${
                    showLink ? "show-nav" : "hide-show-burger"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/aboutUs"
                      data-test-id={`menu-link-aboutUs`}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/women"
                      data-test-id={`menu-link-women`}
                    >
                      Women
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/men"
                      data-test-id={`menu-link-men`}
                    >
                      Men
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/beauty"
                      data-test-id={`menu-link-beauty`}
                    >
                      Beauty
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/accessories"
                      data-test-id={`menu-link-accessories`}
                    >
                      Accessories
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <NavLink
                      className="nav-down__link"
                      to="/blog"
                      data-test-id={`menu-link-blog`}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-down__item" onClick={handleShowLink}>
                    <Link
                      className="nav-down__link"
                      to="/contact"
                      data-test-id={`menu-link-contact`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-down__icons">
                <ul className="nav-down__icons-list">
                  <li className="nav-down__icons-item">
                    <img src={search} alt="search" />
                  </li>
                  <li className="nav-down__icons-item">
                    <img src={globe} alt="globe" />
                  </li>
                  <li className="nav-down__icons-item">
                    <img src={user} alt="user" />
                  </li>
                  <li className="nav-down__icons-item nav-down__icons_shop" onClick={handleShowCart} data-test-id='cart-button'>
                    <img src={shop} alt="shop" />
                    <span className="icons-shop__span">{productsMensAndWomens.length}</span>
                  </li>
                </ul>
              </div>
              <button
                data-test-id="burger-menu-btn"
                className={`navbar__burger  ${
                  showLink ? "show-nav" : "hide-show-burger"
                }`}
                onClick={handleShowLink}
              >
                <span className="burger-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Navigation;


Navigation.propTypes = {
  showLink: PropTypes.bool.isRequired,
  handleShowLink: PropTypes.func.isRequired,
  handleShowCart: PropTypes.func.isRequired
};
