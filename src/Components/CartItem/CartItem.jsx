import React from "react";
import "./CartItem.css";
import deleteCart from "../../img/cart-component/cart-img.svg";
import plus from "../../img/cart-component/plus.svg";
import minus from "../../img/cart-component/minus.svg";
import { useDispatch} from "react-redux";
import {
  deleteItemFromCart,
  deleteItemFromCartWomens,
  plusProductsBase,
  minusProductsBase,
  plusProductsBaseWomens,
  minusProductsBaseWomens
} from "../../redux/cart/reducer";

function CartItem({prod}) {

  const dispath = useDispatch();
  const deleteCartMenItem = (id) => {
    dispath(deleteItemFromCart(id));
    dispath(deleteItemFromCartWomens(id));
  };



const plusItemProd = () => {
  dispath(plusProductsBase(prod.id));
  dispath(plusProductsBaseWomens(prod.id))
}

const minusItemProd = () => {
  dispath(minusProductsBase(prod.id));
  dispath(minusProductsBaseWomens(prod.id))
}

let couteProd = prod.countProd * prod.price



  return (
    <div className="item-cart-product" data-test-id='cart-card'>
      <div className="count-pr__img-count-blocks">
        <img
          className="cart-img-pr"
          src={`https://training.cleverland.by/shop/${prod.pictureUrl}`}
          alt="img-cart"
        />
        <div className="count-pr">
          <div className="count-up-pr">
            <h3 className="count-pr__title">{prod.name}</h3>
            <span className="count-pr__color">{prod.color},</span>
            <span className="count-pr__size">{prod.size}</span>
          </div>
          <div className="count-down-pr">
            <div className="btn-count-pr">
              <button className="btn-count-pr__minus" onClick={minusItemProd} data-test-id='minus-product'>
                <img className="img-plus" src={minus} alt="minus" />
              </button>
              <span className="count-number-pr">{prod.countProd}</span>
              <button className="btn-count-pr__plus" onClick={plusItemProd} data-test-id='plus-product'>
                <img className="img-plus" src={plus} alt="plus" />
              </button>
            </div>
            <span className="count-down-price">$ {couteProd.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="count-delete-pr">
        <button
          className="delete-pr__btn"
          onClick={() => deleteCartMenItem(prod.id)}
          data-test-id='remove-product'
        >
          <img className="delete-img-pr" src={deleteCart} alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
