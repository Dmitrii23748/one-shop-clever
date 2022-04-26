import React from "react";
import "./Subscribe.css";
import women from "../../img/subscribe/women.png";
import men from "../../img/subscribe/men.png";

function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <div className="container">
          <div className="subscribe-position">
            <div className="subscribe-block">
              <p className="subscribe-block__text">Special Offer</p>
              <h3 className="subscribe-block__title">
                Subscribe And
                <span className="subscribe-block__title-span">Get 10% Off</span>
              </h3>
              <input
                className="subscribe-block__input"
                type="text"
                placeholder="Enter your email"
              />
              <button className="subscribe-block__btn">Subscribe</button>
            </div>
            <div className="subscribe__women">
              <img className="subscribe__women-img" src={women} alt="women" />
            </div>
            <div className="subscribe__men">
              <img className="subscribe__men-img" src={men} alt="men" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
