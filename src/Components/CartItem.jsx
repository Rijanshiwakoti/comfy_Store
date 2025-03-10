import React from "react";
import { generateAmountOptions } from "../Utils";
import { removeItem, editItem } from "../Features/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <div className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* company */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* color */}
        <p className="mt-4 text-sm flex items-center gap-x-2 capitalize">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      {/*  */}
      <div className="sm:ml-12">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
