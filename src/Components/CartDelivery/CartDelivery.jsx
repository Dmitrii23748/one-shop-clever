import React, { useState } from "react";
import "./CartDelivery.css";

function CartDelivery() {
  const [checkedDelivery, setCheckedDelivery] = useState("choose");

  const handleChange = (e) => {
    setCheckedDelivery(e.target.value);
  };
  return (
    <div className="delivery">
      <h3 className="delivery-title">
        Choose the method of delivery of the items
      </h3>
      <form action="#">
        <ul className="delivery__radio-btn">
          <li className="delivery__radio-btn-item delivery__radio_up">
            <label className="title-radio" htmlFor="one-de">
              <input
                className="real-radio"
                type="radio"
                id="one-de"
                name="delivery"
                checked={checkedDelivery === "choose" ? true : false}
                onChange={handleChange}
                value="choose"
              />
              <span className="castom-radio"></span>
              Pickup from post offices
            </label>
          </li>
          <li className="delivery__radio-btn-item">
            <label className="title-radio" htmlFor="two-de">
              <input
                className="real-radio"
                type="radio"
                id="two-de"
                name="delivery"
                checked={checkedDelivery === "express" ? true : false}
                onChange={handleChange}
                value="express"
              />
              <span className="castom-radio"></span>
              Express delivery
            </label>
          </li>
          <li className="delivery__radio-btn-item delivery__radio_down">
            <label className="title-radio" htmlFor="three-de">
              <input
                className="real-radio"
                type="radio"
                id="three-de"
                name="delivery"
                checked={checkedDelivery === "store" ? true : false}
                onChange={handleChange}
                value="store"
              />
              <span className="castom-radio"></span>
              Store pickup
            </label>
          </li>
        </ul>

        <div className="delivery-info__item">
          <span className="delivery-info__title">phone</span>
          <input
            type="text"
            className="delivery-info__input"
            placeholder="+375 (_ _) _ _ _ _ _ _ _ "
          />
        </div>
        <div className="delivery-info__item">
          <span className="delivery-info__title">e-mail</span>
          <input
            type="email"
            className="delivery-info__input"
            placeholder="e-mail"
          />
        </div>
        <div className="delivery-info__item">
          {checkedDelivery === "store" ? (
            <>
              <span className="delivery-info__title">adress of store</span>
              <input
                type="text"
                className="delivery-info__input delivery-info__input-adress"
                placeholder="Country"
              />
              <input
                type="text"
                className="delivery-info__input delivery-info__input-adress"
                placeholder="Store adress"
              />
            </>
          ) : (
            <>
              <span className="delivery-info__title">adress</span>
              <input
                type="text"
                className="delivery-info__input delivery-info__input-adress"
                placeholder="Country"
              />
              <input
                type="text"
                className="delivery-info__input delivery-info__input-adress"
                placeholder="City"
              />
              <input
                type="text"
                className="delivery-info__input delivery-info__input-adress"
                placeholder="Street"
              />
              <div className="input-house">
                <input
                  type="text"
                  className="delivery-info__input delivery-info__input-house"
                  placeholder="House"
                />
                <input
                  type="text"
                  className="delivery-info__input delivery-info__input-apartment"
                  placeholder="Apartment"
                />
              </div>
            </>
          )}
        </div>
        {checkedDelivery === "express" || checkedDelivery === "store" ? null : (
          <div className="delivery-info__item">
            <span className="delivery-info__title">POSTcode</span>
            <input
              type="text"
              className="delivery-info__input"
              placeholder="BY _ _ _ _ _ _"
            />
          </div>
        )}
        <div className="checkbox-iagree">
          <label className="title-checkbox" htmlFor="one-delivery">
            <input
              className="real-checkbox-delivery"
              type="checkbox"
              id="one-delivery"
            />
            <span className="castom-checkbox-delivery"></span>I agree to the
            processing of my personal information
          </label>
        </div>
      </form>
    </div>
  );
}

export default CartDelivery;
