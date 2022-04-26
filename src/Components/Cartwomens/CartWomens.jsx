import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CartWomens.css";
import Stars from "../Stars/Stars";

function CartWomens({routeId, id, name, price, sale, discount, img, rating }) {
  return (
  
    <>
      <div className="women-cart" >
        <Link to={`/women/${routeId}`} className="women-cart__link" data-test-id={`clothes-card-women`}>
          <img
            className="womens-cart__img"
            src={`https://training.cleverland.by/shop/${img}`}
            alt="women-img"
          />
          <p className="womens-cart__text">{name}</p>
          <div className="womens-cart__stars">
            <div className="womens-cart__price-sale">
              <span className="womens-cart__stars-text">$ {price}</span>
              {sale ? (
                <span className="womens-cart__stars-sale">$ {sale}</span>
              ) : (
                null
              )}
            </div>
            <Stars rating={rating} />
          </div>
          {discount ? (
            <div className="womens-percent">
              <p className="womens-percent__text">{discount}</p>
            </div>
          ) : (
            null
          )}
        </Link>
      </div>
    </>
  );
}


CartWomens.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale: PropTypes.string,
  discount: PropTypes.string,
  routeId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default CartWomens;




