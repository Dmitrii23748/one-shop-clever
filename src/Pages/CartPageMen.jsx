import React from "react";
import CartPageComponentMen from "../Components/CartPageComponentMen/CartPageComponentMen";
import { useParams } from "react-router-dom";

function CartPageMen() {
  const { routeId } = useParams();
  return <CartPageComponentMen routeId={routeId} />;
}

export default CartPageMen;
