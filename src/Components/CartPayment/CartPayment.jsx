import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CartPayment.css";
import paypal from "../../img/cart-component/paypal-cart.png";
import visa from "../../img/cart-component/visa-cart.png";
import mastercart from "../../img/cart-component/mastercard-cart.png";
import eyes from "../../img/cart-component/eyeslash.svg";
import eyescopy from "../../img/cart-component/eyeslash-copy.svg";

function CartPayment({ checkedPaypal, setCheckedPaypal }) {
  const [eyesState, setEyesState] = useState(false);

  const handleEyes = () => {
    setEyesState(true);
  };
  const handleEyesBlur = () => {
    setEyesState(false);
  };

  const handleChangePaypal = (e) => {
    setCheckedPaypal(e.target.value);
  };
  return (
    <div className="payment">
      <h3 className="payment-title">Method of payments</h3>
      <form action="#">
        <ul className="payment__radio-btn">
          <li className="payment__radio-btn-item payment__radio-btn-item_up">
            <label
              className="title-radio title-radio__payment"
              htmlFor="one-paypal"
            >
              <input
                className="real-radio"
                type="radio"
                id="one-paypal"
                name="payment"
                checked={checkedPaypal === "paypal" ? true : false}
                onChange={handleChangePaypal}
                value="paypal"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={paypal} alt="paypal" />
            </label>
          </li>
          <li className="payment__radio-btn-item">
            <label
              className="title-radio title-radio__payment"
              htmlFor="two-visa"
            >
              <input
                className="real-radio"
                type="radio"
                id="two-visa"
                name="payment"
                checked={checkedPaypal === "visa" ? true : false}
                onChange={handleChangePaypal}
                value="visa"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={visa} alt="visa" />
            </label>
          </li>
          <li className="payment__radio-btn-item payment__radio-btn-item_medium">
            <label
              className="title-radio title-radio__payment"
              htmlFor="three-mastercart"
            >
              <input
                className="real-radio"
                type="radio"
                id="three-mastercart"
                name="payment"
                checked={checkedPaypal === "mastercart" ? true : false}
                onChange={handleChangePaypal}
                value="mastercart"
              />
              <span className="castom-radio"></span>
              <img className="payment-img" src={mastercart} alt="mastercart" />
            </label>
          </li>
          <li className="payment__radio-btn-item payment__radio-btn-item_down">
            <label
              className="title-radio title-radio__payment"
              htmlFor="four-cash"
            >
              <input
                className="real-radio"
                type="radio"
                id="four-cash"
                name="payment"
                checked={checkedPaypal === "cash" ? true : false}
                onChange={handleChangePaypal}
                value="cash"
              />
              <span className="castom-radio"></span>
              cash
            </label>
          </li>
        </ul>
        {checkedPaypal === "visa" ? (
          <>
            <div className="delivery-info__item">
              <span className="delivery-info__title">Card</span>
              <input
                type="text"
                className="delivery-info__input"
                placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
              />
            </div>
            <div className="input-house input-house__paypal">
              <input
                type="text"
                className="delivery-info__input delivery-info__input-house"
                placeholder="YY/MM"
              />
              <input
                type="text"
                className="delivery-info__input delivery-info__input-apartment paypal-info__input-apartment"
                placeholder="CVV"
                onFocus={handleEyes}
                onBlur={handleEyesBlur}
              />
              {eyesState ? (
                <img className="paypal-eyas" src={eyescopy} alt="eyescopy" />
              ) : (
                <img className="paypal-eyas" src={eyes} alt="eyas" />
              )}
            </div>
          </>
        ) : null}
        {checkedPaypal === "paypal" ? (
          <div className="delivery-info__item">
            <span className="delivery-info__title">E-mail</span>
            <input
              type="email"
              className="delivery-info__input"
              placeholder="e-mail"
            />
          </div>
        ) : null}
      </form>
      {checkedPaypal === "cash" ? null : null}
    </div>
  );
}

export default CartPayment;


CartPayment.propTypes = {
  checkedPaypal: PropTypes.string.isRequired,
  setCheckedPaypal: PropTypes.func.isRequired
}