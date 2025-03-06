import React, { useState } from "react";
import { customFetch } from "../Utils/index";
import { Link, useLoaderData } from "react-router-dom";
import { generateAmountOptions } from "../Utils/index";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/CartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};
export const loader =
  (queryclient) =>
  async ({ params }) => {
    const response = await queryclient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const dispatch = useDispatch();

  const { image, title, colors, price, description, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product info */}
        <div>
          <h1 className="capitalize text-3xl font-bold tracking-wider">
            {title}
          </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">${price / 100}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* amount */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              id="amount"
              className="select select-secondary select=bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(4)}
            </select>
          </div>
          {/* cart button */}
          <div className="mt-10">
            <button
              type="button"
              className="capitalize btn btn-secondary btn-md"
              onClick={addToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
