import React from "react";
import "./ButtonCartWomen.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCartWomens, deleteItemFromCartWomens } from "../../redux/cart/reducer";

function ButtonCartWomen({cartProductWomen}) {
    const dispath = useDispatch();
    const productsWomens = useSelector((state) => state.cart.itemsInCartWomens);

    const isItemInCartWomen = productsWomens.some(item => item.id === cartProductWomen.id)


    const  handleAddProductWomens = () => {
        if(isItemInCartWomen) {
          dispath(deleteItemFromCartWomens(cartProductWomen.id))
        } else {
          dispath(setItemInCartWomens(cartProductWomen));
        }
    }

  return (
    <button
     className="cart-page__price-item cart-page__price-btn"
     onClick={handleAddProductWomens}
     data-test-id='add-cart-button'
     >
     { isItemInCartWomen ? 'Remove to card' : 'Add to card'}
    </button>
  );
}

export default ButtonCartWomen;
