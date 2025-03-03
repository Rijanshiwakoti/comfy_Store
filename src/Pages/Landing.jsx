import React from "react";
import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import { customFetch } from "../Utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
