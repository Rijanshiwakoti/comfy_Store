import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../Components/SectionTitle";
import CartTotals from "../Components/CartTotals";
import CheckoutForm from "../Components/CheckoutForm";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className="mt-8 grid gap-8 items-start md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
