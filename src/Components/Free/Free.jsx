import React from "react";
import "./Free.css";
import car from '../../img/free/car.svg';
import arrows from '../../img/free/arrows.svg';
import circle from '../../img/free/circle.svg';

function Free() {
  return (
      <section className="free">
        <div className="container">
            <div className="free-block">
                <div className="free-block__item free-block__item-car">
                    <img className="free-block__item-img" src={car} alt="car" />
                    <div className="free-block__item-text">
                        <p className="free-block__text-bolt">FREE SHIPPING</p>
                        <p className="free-block__text-normal">On all UA order or order above $100</p>
                    </div>
                </div>
                <div className="free-block__item free-block__item-arrows">
                    <img className="free-block__item-img" src={arrows} alt="arrows" />
                    <div className="free-block__item-text">
                        <p className="free-block__text-bolt">30 DAYS RETURN</p>
                        <p className="free-block__text-normal">Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div className="free-block__item">
                    <img className="free-block__item-img" src={circle} alt="circle" />
                    <div className="free-block__item-text">
                        <p className="free-block__text-bolt">SUPPORT 24/7</p>
                        <p className="free-block__text-normal">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Free;
