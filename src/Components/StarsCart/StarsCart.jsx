import React from "react";
import PropTypes from "prop-types";
import "./StarsCart.css";
import staryellow from "../../img/stars/yellow-star.svg";
import stargrey from "../../img/stars/grey-star.svg";

function StarsCart({ cartRating }) {
  let starLength = 5;
  return (
    <>
      <div className="womens-cart__stars-block">
        {[...Array(cartRating)].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={staryellow}
              alt="staryellow"
            />
          );
        })}
        { cartRating > 0 ?
        [...Array(starLength - cartRating )].map((star, i) => {
          return (
            <img
              key={i}
              className="womens-cart__star"
              src={stargrey}
              alt="stargrey"
            />
          );
        }) : null
        }
      </div>
    </>
  );
}

export default StarsCart;

StarsCart.propTypes = {
  cartRating: PropTypes.number.isRequired
}
