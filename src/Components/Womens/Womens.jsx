/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import "./Womens.css";
import CartWomens from "../Cartwomens/CartWomens";


function Womens({categoryWomensMain}) {

  return (
    <section
      className="womens"
     
    >
      <div className="container">
        <div className="womens-img__block" data-test-id={`clothes-women`}>
          {categoryWomensMain.map((cart, index) => {
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

export default Womens;

Womens.propTypes = {
  categoryWomensMain: PropTypes.array.isRequired
}
