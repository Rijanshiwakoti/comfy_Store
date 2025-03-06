import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./Pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store";

import { loader as landingLoader } from "./Pages/Landing";
import { loader as checkoutLoader } from "./Pages/Checkout";
import { loader as singleProductLoader } from "./Pages/SingleProduct";
import { loader as productLoader } from "./Pages/Products";
import { loader as orderLoader } from "./Pages/Orders";
// actions
import { action as register } from "./Pages/Register";
import { action as login } from "./Pages/Login";
import { action as checkoutAction } from "./Components/CheckoutForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: orderLoader(store, queryClient),
      },
      {
        path: "products",
        element: <Products />,
        loader: productLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: login(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: register,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
