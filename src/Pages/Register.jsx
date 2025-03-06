import React from "react";
import InputField from "../Components/InputField";
import { Form, Link, redirect } from "react-router-dom";
import SubmitBtn from "../Components/SubmitBtn";
import { customFetch } from "../Utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    console.log(response);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);

    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <Form method="POST" className="grid place-items-center  min-h-screen">
      <div className="card w-96 p-8 shadow-lg shadow-cyan-500 flex flex-col">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <InputField type="text" label="username" name="username" />
        <InputField type="email" label="email" name="email" />
        <InputField type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center mt-4">
          Already a User?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default Register;
