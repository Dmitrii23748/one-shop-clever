import React from "react";
import CartPageComponentWomen from "../Components/CartPageComponentWomen/CartPageComponentWomen";
import { useParams } from "react-router-dom";

function CartPageWomen() {
  const { routeId } = useParams();
  return <CartPageComponentWomen routeId={routeId} />;
}

export default CartPageWomen;
