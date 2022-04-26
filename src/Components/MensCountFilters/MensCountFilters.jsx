/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./MensCountFilters.css";
import PropTypes from "prop-types";
import { priceCheckBoxMens } from "../../data/root";

function MensCountFilters({
  productsMens,
  filterColor,
  filterSize,
  filterBrand,
  filterPrice,
}) {
  const [filterCount, setFilterCount] = useState(productsMens.length);

  useEffect(() => {
    setFilterCount(productsMens.length);
  }, [productsMens]);
  return (
    <section className="show-count__filters">
      <div className="container">
        <div className="mens-filter__show">
          {filterColor.length > 0 ||
          filterSize.length > 0 ||
          filterBrand.length > 0 ||
          filterPrice.length > 0 ? (
            <h3 className="mens-show__count-title">{filterCount} items Found</h3>
          ) : null}
          <div className="mens-show__block">
            {filterColor.length > 0 ? (
              <h3 className="mens-show__title">color:</h3>
            ) : null}
            <ul className="mens-show__list">
              {filterColor.length > 0
                ? filterColor.map((item, index) => {
                    return (
                      <li className="mens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="mens-show__block">
            {filterSize.length > 0 ? (
              <h3 className="mens-show__title">size:</h3>
            ) : null}
            <ul className="mens-show__list">
              {filterSize.length > 0
                ? filterSize.map((item, index) => {
                    return (
                      <li className="mens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="mens-show__block">
            {filterBrand.length > 0 ? (
              <h3 className="mens-show__title">brand:</h3>
            ) : null}
            <ul className="mens-show__list">
              {filterBrand.length > 0
                ? filterBrand.map((item, index) => {
                    return (
                      <li className="mens-show__item" key={index}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="mens-show__block">
            {filterPrice.length > 0 ? (
              <h3 className="mens-show__title">price:</h3>
            ) : null}
            <ul className="mens-show__list">
                {
                    filterPrice.length > 0 ? 
                        filterPrice.map((item, index) => {
                            if(item === priceCheckBoxMens[0].priceCheck[0]) {
                                return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[0].title}`}</li>
                            }
                            if(item === priceCheckBoxMens[1].priceCheck[0]) {
                                return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[1].title}`}</li>
                            }
                            if(item === priceCheckBoxMens[2].priceCheck[0]) {
                                return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[2].title}`}</li>
                            }
                            if(item === priceCheckBoxMens[3].priceCheck[0]) {
                              return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[3].title}`}</li>
                            }
                            if(item === priceCheckBoxMens[4].priceCheck[0]) {
                              return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[4].title}`}</li>
                            }
                            if(item === priceCheckBoxMens[5].priceCheck[0]) {
                              return <li className="mens-show__item" key={index}>{`$ ${priceCheckBoxMens[5].title}`}</li>
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

export default MensCountFilters;

MensCountFilters.propTypes = {
  productsMens: PropTypes.array.isRequired,
  filterColor: PropTypes.array.isRequired,
  filterSize: PropTypes.array.isRequired,
  filterBrand: PropTypes.array.isRequired,
  filterPrice: PropTypes.array.isRequired,
};
