import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
