import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";

import InputField from "../Components/InputField";
import SubmitBtn from "../Components/SubmitBtn";
import { customFetch } from "../Utils";
import { loginUser } from "../Features/UserSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };
  return (
    <Form method="POST" className="grid min-h-screen place-items-center">
      <div className="card w-96 shadow-xl flex flex-col gap-y-4 p-8 shadow-cyan-500/50">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <InputField type="email" label="email" name="identifier" />
        <InputField type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-block btn-secondary"
          onClick={loginAsGuest}
        >
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default Login;
