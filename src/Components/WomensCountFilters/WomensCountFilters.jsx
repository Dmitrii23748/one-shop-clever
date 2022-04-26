/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./WomensCountFilters.css";
import PropTypes from "prop-types";
import { priceCheckBoxWomens } from "../../data/root";

function WomensCountFilters({
  productsWomens,
  filterColor,
  filterSize,
  filterBrand,
  filterPrice,
}) {
  const [filterCount, setFilterCount] = useState(productsWomens.length);

  useEffect(() => {
    setFilterCount(productsWomens.length);
  }, [productsWomens]);
  return (
    <section className="show-count__filters">
      <div className="container">
        <div className="womens-filter__show">
          {filterColor.length > 0 ||
          filterSize.length > 0 ||
          filterBrand.length > 0 ||
          filterPrice.length > 0 ? (
            <h3 className="womens-show__count-title">{filterCount} items Found</h3>
          ) : null}
          <div className="womens-show__block">
            {filterColor.length > 0 ? (
              <h3 className="womens-show__title">color:</h3>
            ) : null}
            <ul className="womens-show__list">
              {filterColor.length > 0
                ? filterColor.map((item, index) => {
                    return (
                      <li className="womens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="womens-show__block">
            {filterSize.length > 0 ? (
              <h3 className="womens-show__title">size:</h3>
            ) : null}
            <ul className="womens-show__list">
              {filterSize.length > 0
                ? filterSize.map((item, index) => {
                    return (
                      <li className="womens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="womens-show__block">
            {filterBrand.length > 0 ? (
              <h3 className="womens-show__title">brand:</h3>
            ) : null}
            <ul className="womens-show__list">
              {filterBrand.length > 0
                ? filterBrand.map((item, index) => {
                    return (
                      <li className="womens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="womens-show__block">
            {filterPrice.length > 0 ? (
              <h3 className="womens-show__title">price:</h3>
            ) : null}
            <ul className="womens-show__list">
                {
                    filterPrice.length > 0 ? 
                        filterPrice.map((item, index) => {
                            if(item === priceCheckBoxWomens[0].priceCheck[0]) {
                                return <li className="womens-show__item" key={index}>{`$ ${priceCheckBoxWomens[0].title}`}</li>
                            }
                            if(item === priceCheckBoxWomens[1].priceCheck[0]) {
                                return <li className="womens-show__item" key={index}>{`$ ${priceCheckBoxWomens[1].title}`}</li>
                            }
                            if(item === priceCheckBoxWomens[2].priceCheck[0]) {
                                return <li className="womens-show__item" key={index}>{`$ ${priceCheckBoxWomens[2].title}`}</li>
                            }
                        })
                        : null
                }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomensCountFilters;

WomensCountFilters.propTypes = {
  productsWomens: PropTypes.array.isRequired,
  filterColor: PropTypes.array.isRequired,
  filterSize: PropTypes.array.isRequired,
  filterBrand: PropTypes.array.isRequired,
  filterPrice: PropTypes.array.isRequired,
};
