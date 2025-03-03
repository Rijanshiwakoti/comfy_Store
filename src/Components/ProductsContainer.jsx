import React from "react";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4>{totalProducts}products</h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>{layout === "grid" ? <ProductCard /> : <ProductList />}</div>
    </>
  );
};

export default ProductsContainer;
