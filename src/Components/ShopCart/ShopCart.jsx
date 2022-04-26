import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ShopCart.css";
import cartClose from "../../img/cart-component/cart-close.svg";
import CartItem from "../CartItem/CartItem";
import CartDelivery from "../CartDelivery/CartDelivery";
import CartPayment from "../CartPayment/CartPayment";
import { useSelector } from "react-redux";

function ShopCart({ showCart, handleShowCart, setShowCart }) {
  const productsMens = useSelector((state) => state.cart.itemsInCart);
  const productsWomens = useSelector((state) => state.cart.itemsInCartWomens);
  const productsMensAndWomens = [...productsMens, ...productsWomens];

  const totalPrice = productsMensAndWomens.reduce((acc, prod) => {
    return (acc += prod.price * prod.countProd);
  }, 0);

  const [itemCartMain, setItemCartMain] = useState(true);
  const [itemCartDelivery, setItemCartDelivery] = useState(false);
  const [itemCartPayment, setitemCartPayment] = useState(false);

  const [checkedPaypal, setCheckedPaypal] = useState("visa");

  const showItemCartMain = () => {
    setItemCartMain(true);
    setItemCartDelivery(false);
    setitemCartPayment(false);
  };
  const showItemCartDelivery = () => {
    setItemCartMain(false);
    setItemCartDelivery(true);
    setitemCartPayment(false);
  };
  const showItemCartPayment = () => {
    setItemCartMain(false);
    setItemCartDelivery(false);
    setitemCartPayment(true);
  };

  return (
    <section
      className={showCart ? "cart-wrapper" : "cart-wrapper cart-wrapper-none"}
      onClick={() => setShowCart(false)}
      data-test-id="cart"
    >
      <div
        className={showCart ? "cart show-cart" : "cart"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-block-title">
          <div className="container-cart">
            <div className="cart-block-title__flex">
              <h3 className="cart-title">Shopping Cart</h3>
              <button
                className="cart__btn-close"
                onClick={() => {
                  handleShowCart();
                }}
              >
                <img className="cart__close-btn" src={cartClose} alt="close" />
              </button>
            </div>
          </div>
        </div>

        <div className="cart-block-product">
          <div className="container-cart container-cart-block">
            {productsMensAndWomens.length > 0 ? (
              <>
                <div className="cart-block__btn">
                  <button
                    className={
                      itemCartMain
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                    onClick={showItemCartMain}
                  >
                    Item in Cart &nbsp;&nbsp;/
                  </button>
                  <button
                    className={
                      itemCartDelivery
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                    onClick={showItemCartDelivery}
                  >
                    Delivery Info &nbsp;&nbsp;/
                  </button>
                  <button
                    className={
                      itemCartPayment
                        ? "cart-block__btn-item active-cart-btn"
                        : "cart-block__btn-item"
                    }
                    onClick={showItemCartPayment}
                  >
                    Payment
                  </button>
                </div>
                <div className="container-cart">
                  <div
                    className={
                      itemCartMain
                        ? "item-main__block"
                        : "item-main__block item-main__block-none"
                    }
                  >
                    <div className="item-main__block-height">
                      {itemCartMain &&
                        itemCartDelivery === false &&
                        itemCartPayment === false &&
                        productsMensAndWomens.map((prod, index) => {
                          return <CartItem key={index} prod={prod} />;
                        })}
                    </div>
                  </div>

                  <div
                    className={
                      itemCartDelivery
                        ? "delivery-main__block"
                        : "delivery-main__block delivery-main__block-none"
                    }
                  >
                    {itemCartDelivery &&
                    itemCartMain === false &&
                    itemCartPayment === false ? (
                      <CartDelivery />
                    ) : null}
                  </div>

                  {itemCartPayment &&
                  itemCartMain === false &&
                  itemCartDelivery === false ? (
                    <CartPayment
                      checkedPaypal={checkedPaypal}
                      setCheckedPaypal={setCheckedPaypal}
                    />
                  ) : null}
                </div>
                <div className="cart-footer__btn">
                  <div className="cart-footer__price">
                    <div className="cart-footer__price-title">Total</div>
                    <span className="cart-footer__price-number">
                      $ {Number(totalPrice).toFixed(2)}
                    </span>
                  </div>
                  {itemCartPayment &&
                  itemCartMain === false &&
                  itemCartDelivery === false ? (
                    <div className="cart-footer__btn-further">
                      <button className="btn-further">
                        {checkedPaypal === "cash" ? "ready" : "Check Out"}
                      </button>
                    </div>
                  ) : (
                    <div className="cart-footer__btn-further">
                      <button className="btn-further">further</button>
                    </div>
                  )}
                  <div className="cart-footer__btn-view">
                    <button
                      className="btn-view"
                      onClick={() => setShowCart(false)}
                    >
                      view cart
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="no-products__block">
                  <div className="not-cart-products__title-block">
                    <h2 className="not-cart-products__title">
                      Sorry, your cart is empty
                    </h2>
                  </div>
                  <div className="cart-footer__btn-further">
                    <button
                      className="btn-further"
                      onClick={() => setShowCart(false)}
                    >
                      back to shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCart;

ShopCart.propTypes = {
  handleShowCart: PropTypes.func.isRequired,
  setShowCart: PropTypes.func.isRequired,
};
