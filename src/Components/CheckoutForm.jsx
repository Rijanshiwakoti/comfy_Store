import React from "react";
import { Form, redirect } from "react-router-dom";
import InputField from "./InputField";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../Utils";
import { toast } from "react-toastify";
import { clear } from "../Features/CartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);

      store.dispatch(clear());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      if (error?.response?.status === 401 || 403) return redirect("/login");
      toast.error(errorMessage);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form className="flex flex-col gap-y-4 " method="post">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <InputField label="first name" name="name" type="text" />
      <InputField label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
