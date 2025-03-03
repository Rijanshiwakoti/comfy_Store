import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        return (
          <Link
            to={`/products/${[product.id]}`}
            key={product.id}
            className="p-8 shadow-xl hover:shadow-2xl transition duration-300 group bg-base-100 flex-wrap flex flex-col gap-y-4 sm:flex-row"
          >
            <img
              src={image}
              alt=""
              className="rounded-xl h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 "
            />
            <div className="ml-0 sm:ml-16">
              <h2 className="text-lg font-medium capitalize tracking-wider">
                {title}
              </h2>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <span className="font-medium ml-0 sm:ml-auto text-lg">
              ${price / 100}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
