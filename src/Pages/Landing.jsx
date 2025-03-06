import React from "react";
import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import { customFetch } from "../Utils";

const url = "/products?featured=true";

const FeaturedProductsQuery = {
  queryKey: ["featureProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(FeaturedProductsQuery);
  console.log(response.data.data);

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
