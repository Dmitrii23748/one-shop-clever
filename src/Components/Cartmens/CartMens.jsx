import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CartMens.css";
import Stars from "../Stars/Stars";

function CartMens({routeId, id, name, price, img, rating, discount }) {
  return (
      <div className="men-cart">
        <Link to={`/men/${routeId}`} className="men-cart__link" data-test-id={`clothes-card-men`}>
          <img
            className="mens-cart__img"
            src={`https://training.cleverland.by/shop/${img}`}
            alt="men-img"
          />
          <p className="mens-cart__text">{name}</p>
          <div className="mens-cart__stars">
            <div className="mens-cart__price-sale">
              <span className="mens-cart__stars-text">$ {price}</span>
            </div>
            <Stars rating={rating} />
          </div>
          {discount ? (
            <div className="mens-percent">
              <p className="mens-percent__text">{discount}</p>
            </div>
          ) : (
            null
          )}
        </Link>
      </div>
  );
}





export default CartMens;

CartMens.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}