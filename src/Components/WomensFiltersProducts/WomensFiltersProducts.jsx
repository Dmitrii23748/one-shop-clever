import React from "react";
import PropTypes from "prop-types";
import "./WomensFiltersProducts.css";
import CartWomens from "../Cartwomens/CartWomens";


function WomensFiltersProducts({productsWomens}) {

  return (
    <section
      className="womens-filter__prod"
      
    >
      <div className="container">
        <div className="womens-img__block-prod" data-test-id={`products-page-women`}>
          {productsWomens.map((cart, index) => {
            return (
              <CartWomens
                key={cart.id}
                id={index + 1}
                routeId = {cart.id}
                name={cart.name}
                price={cart.price}
                sale={cart.sale}
                discount={cart.discount}
                rating={cart.rating}
                img={cart.images[0].url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WomensFiltersProducts;

WomensFiltersProducts.propTypes = {
  productsWomens: PropTypes.array.isRequired
}
