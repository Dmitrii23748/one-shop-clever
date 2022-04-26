import React from "react";
import "./ButtonCart.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

function ButtonCart({cartProductMen}) {

    const dispath = useDispatch();
    const productsMens = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = productsMens.some(item => item.id === cartProductMen.id)


    const  handleAddProductMen = () => {
        if(isItemInCart) {
          dispath(deleteItemFromCart(cartProductMen.id))
        } else {
          dispath(setItemInCart(cartProductMen));
        }
    }

  return (
    <button
     className="cart-page__price-item cart-page__price-btn"
     onClick={handleAddProductMen}
     data-test-id='add-cart-button'
     >
      { isItemInCart ? 'Remove to card' : 'Add to card'}
    </button>
  );
}

export default ButtonCart;
