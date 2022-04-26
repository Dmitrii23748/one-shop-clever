import React from "react";
import "./Footer.css";
import facebook from "../../img/icon-footer/footer-facebook.svg";
import instagram from "../../img/icon-footer/footer-instagram.svg";
import pinterest from "../../img/icon-footer/footer-pinterest.svg";
import twitter from "../../img/icon-footer/footer-twitter.svg";
import local from "../../img/icon-footer/footer-local.svg";
import phone from "../../img/icon-footer/footer-phone.svg";
import clock from "../../img/icon-footer/footer-clock.svg";
import mail from "../../img/icon-footer/footer-mail.svg";
import stripe from "../../img/icon-footer/pay-stripe.svg";
import aes from "../../img/icon-footer/pay-aes.svg";
import paypal from "../../img/icon-footer/pay-paypal.svg";
import visa from "../../img/icon-footer/pay-visa.svg";
import mastercart from "../../img/icon-footer/pay-mastercart.svg";
import discover from "../../img/icon-footer/pay-discover.svg";
import american from "../../img/icon-footer/pay-americanexpress.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className="footer" data-test-id='footer'>
        <div className="footer-contact">
          <div className="container">
            <div className="footer-contact__block">
              <h3 className="footer-contact__title footer-contact__item-block">
                BE IN TOUCH WITH US:
              </h3>
              <div className="footer-contact__letter footer-contact__item-block">
                  <input
                    className="footer-contact__input"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button className="footer-contact__btn" type="button">
                    Join Us
                  </button>
              
              </div>
              <ul className="footer-contact__list footer-contact__item-block">
                <li className="footer-contact__item">
                  <a
                    className="footer-contact__link"
                    href="https://www.facebook.com/"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="footer-contact__item">
                  <a
                    className="footer-contact__link"
                    href="https://twitter.com/i/flow/login"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li className="footer-contact__item">
                  <a
                    className="footer-contact__link"
                    href="https://www.instagram.com/"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li className="footer-contact__item">
                  <a
                    className="footer-contact__link"
                    href="https://www.pinterest.com/"
                  >
                    <img src={pinterest} alt="pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="container">
            <div className="footer-info__block">
              <ul className="footer-info__item footer-info__category">
                <h3 className="footer-info__title">Categories</h3>
                <li className="footer-info__category-item">
                  <Link className="footer-info__category-link" to="/men" data-test-id={`footer-nav-link-men`}>
                    Men
                  </Link>
                </li>
                <li className="footer-info__category-item">
                  <Link className="footer-info__category-link" to="/women" data-test-id={`footer-nav-link-women`}>
                    Women
                  </Link>
                </li>
                <li className="footer-info__category-item">
                  <Link className="footer-info__category-link" to="/accessories" data-test-id={`footer-nav-link-accessories`}>
                    Accessories
                  </Link>
                </li>
                <li className="footer-info__category-item">
                  <Link className="footer-info__category-link" to="/beauty" data-test-id={`footer-nav-link-beauty`}>
                    Beauty
                  </Link>
                </li>
              </ul>
              <ul className="footer-info__item footer-info__infomation">
                <h3 className="footer-info__title">Infomation</h3>
                <li className="footer-info__infomation-item">
                  <Link className="footer-info__infomation-link" to="/aboutUs" data-test-id={`footer-nav-link-aboutUs`}>
                    About Us
                  </Link>
                </li>
                <li className="footer-info__infomation-item">
                  <Link
                    className="footer-info__infomation-link"
                    to="/contact"
                    data-test-id={`footer-nav-link-contact`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="footer-info__infomation-item">
                  <Link className="footer-info__infomation-link" to="/blog" data-test-id={`footer-nav-link-blog`}> 
                    Blog
                  </Link>
                </li>
                <li className="footer-info__infomation-item">
                  <a className="footer-info__infomation-link" href="#FAQs">
                    FAQs
                  </a>
                </li>
              </ul>
              <ul className="footer-info__item footer-info__useful">
                <h3 className="footer-info__title">Useful links</h3>
                <li className="footer-info__useful-item">
                  <a
                    className="footer-info__useful-link"
                    href="#Terms Conditions"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="footer-info__useful-item">
                  <a
                    className="footer-info__useful-link"
                    href="#Returns Exchanges"
                  >
                    Returns &amp; Exchanges
                  </a>
                </li>
                <li className="footer-info__useful-item">
                  <a
                    className="footer-info__useful-link"
                    href="#Shipping  Delivery"
                  >
                    Shipping &amp; Delivery
                  </a>
                </li>
                <li className="footer-info__useful-item">
                  <a
                    className="footer-info__useful-link"
                    href="#Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul className="footer-info__item footer-info__location">
                <h3 className="footer-info__title">CONTACT US</h3>
                <li className="footer-info__location-item">
                  <img
                    className="footer-info__location-img"
                    src={local}
                    alt="local"
                  />
                  <p className="footer-info__location-text">
                    Belarus, Gomel, Lange 17
                  </p>
                </li>
                <li className="footer-info__location-item">
                  <img
                    className="footer-info__location-img"
                    src={phone}
                    alt="phone"
                  />
                  <a
                    className="footer-info__location-link"
                    href="tel:+375291002030"
                  >
                    +375 29 100 20 30
                  </a>
                </li>
                <li className="footer-info__location-item">
                  <img
                    className="footer-info__location-img"
                    src={clock}
                    alt="clock"
                  />
                  <p className="footer-info__location-text">All week 24/7</p>
                </li>
                <li className="footer-info__location-item">
                  <img
                    className="footer-info__location-img"
                    src={mail}
                    alt="mail"
                  />
                  <a
                    className="footer-info__location-link footer-info__mail"
                    href="mailto:info@clevertec.ru"
                  >
                    info@clevertec.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-pay">
          <div className="container">
            <div className="footer-pay__block">
              <p className="footer-pay__block-item footer-pay__text">
                Copyright © 2032 all rights reserved
              </p>
              <ul className="footer-pay__block-item footer-pay__carts">
                <li className="footer-pay__item">
                  <img
                    className="footer-pay__img"
                    src={stripe}
                    alt="pay-stripe"
                  />
                </li>
                <li className="footer-pay__item">
                  <img className="footer-pay__img" src={aes} alt="pay-aes" />
                </li>
                <li className="footer-pay__item">
                  <img
                    className="footer-pay__img"
                    src={paypal}
                    alt="pay-paypal"
                  />
                </li>
                <li className="footer-pay__item">
                  <img className="footer-pay__img" src={visa} alt="pay-visa" />
                </li>
                <li className="footer-pay__item">
                  <img
                    className="footer-pay__img"
                    src={mastercart}
                    alt="pay-mastercart"
                  />
                </li>
                <li className="footer-pay__item">
                  <img
                    className="footer-pay__img"
                    src={discover}
                    alt="pay-discover"
                  />
                </li>
                <li className="footer-pay__item">
                  <img
                    className="footer-pay__img"
                    src={american}
                    alt="pay-american"
                  />
                </li>
              </ul>
              <p className="footer-pay__block-item footer-pay__text footer-pay__text_underline">
                Clevertec.ru/training
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
