/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./MensBtn.css";

function MensBtn({filtersMensMainPage}) {

  const [activeBtn, setActiveBtn ] = useState(0);

  const clickButtonCategoryMens = (statusBtn, indexBtn) => {
    filtersMensMainPage(statusBtn);
    setActiveBtn(indexBtn)
  }

  useEffect(() => {
    filtersMensMainPage('isNewArrivals')
  }, [])

  const buttons = [
    { name:'isNewArrivals', label: 'NEW ARRIVALS', func: 'isNewArrivals'},
    { name:'isSpecial', label: 'SPECIALS', func: 'isSpecial'},
    { name:'isBestseller', label: 'BESTSELLERS', func: 'isBestseller'},
    { name:'isMostViewed', label: 'MOST VIEWED', func: 'isMostViewed'},
    { name:'isFeatured', label: 'FEATURED PRODUCTS', func: 'isFeatured'}
  ]
  return (
    <section className="section-mens-btn">
      <div className="container">
        <div className="mens-block__title">
          <h2 className="mens-title">MEN’S</h2>
          <ul className="mens-category__list">
          {
              buttons.map((item, index) => {
                return (
                  <li className="womens-category__item" key={item.name}>
                    <button
                      className={ activeBtn === index ? 'womens-category__link active' : 'womens-category__link'}
                      type="button"
                      onClick={() => clickButtonCategoryMens(`${item.func}`, index)}
                      data-test-id={`clothes-men-${item.name}`}
                      >
                      {item.label}
                    </button>
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MensBtn;

MensBtn.propTypes = {
  filtersMensMainPage: PropTypes.func.isRequired
}
