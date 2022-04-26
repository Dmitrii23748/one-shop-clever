import React from "react";
import "./FilterMen.css";
import PropTypes from "prop-types";
import { NEWPRODUCTS } from "../../data/newProducts";
import CheckBox from "../CheckBox/CheckBox";
import {
  createUniqueSizesArray,
  createUniqueColorsArray,
  createUniqueBrandsArray,
  priceCheckBoxMens
} from "../../data/root";

function FilterMens({ filterSelect, closeOpenFilterMen }) {
  const sizeCategory = createUniqueSizesArray(NEWPRODUCTS.men);
  const colorCategory = createUniqueColorsArray(NEWPRODUCTS.men);
  const brandCategory = createUniqueBrandsArray(NEWPRODUCTS.men);

  const paramsArr = ['color', 'size', 'brand'];

  return (
    <section className={closeOpenFilterMen ? "filters-category" : "filters-category hide"} >
      <div className="container">
        <div className="filters-block-mens" data-test-id='filters-men'>
          <div className="filters-mens" >
            <h3 className="filter-title">color</h3>
            <ul className="filters__list" data-test-id='filters-color'>
              {colorCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox
                      paramsArrProp={paramsArr[0]}
                      itemParams={item}
                      label={item}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens" >
            <h3 className="filter-title">size</h3>
            <ul className="filters__list" data-test-id='filters-size'>
              {sizeCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox
                      paramsArrProp={paramsArr[1]}
                      itemParams={item}
                      label={item}
                      onChange={(input) =>
                        filterSelect("SIZE", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens" >
            <h3 className="filter-title">brand</h3>
            <ul className="filters__list"  data-test-id='filters-brand'>
              {brandCategory.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox
                      paramsArrProp={paramsArr[2]}
                      itemParams={item}
                      label={item}
                      onChange={(input) =>
                        filterSelect("BRAND", input.checked, item.toLowerCase())
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters-mens">
            <h3 className="filter-title">price</h3>
            <ul className="filters__list">
              {priceCheckBoxMens.map((item, index) => {
                return (
                  <li className="filters__list-item" key={index}>
                    <CheckBox
                      label={`$ ${String(item.title)}`}
                      onChange={(input) =>
                        filterSelect("PRICE", input.checked, item.priceCheck)
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterMens;

FilterMens.propTypes = {
  filterSelect: PropTypes.func.isRequired,
  closeOpenFilterMen: PropTypes.bool.isRequired,
}
