import Filters from "../Components/Filters";
import PaginationContainer from "../Components/PaginationContainer";
import ProductsContainer from "../Components/ProductsContainer";
import { customFetch } from "../Utils";

const url = "/products";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
