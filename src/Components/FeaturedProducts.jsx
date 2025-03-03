import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductCard />
    </div>
  );
};

export default FeaturedProducts;
