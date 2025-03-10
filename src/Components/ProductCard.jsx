import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductCard = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            to={`/products/${[product.id]}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="px-4 pt-4">
              <img
                src={image}
                alt=""
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">${price / 100}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductCard;
