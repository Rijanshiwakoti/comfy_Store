import React from "react";
import { Form, Link } from "react-router-dom";

import InputField from "../Components/InputField";
import SubmitBtn from "../Components/SubmitBtn";

const Login = () => {
  return (
    <Form method="POST" className="grid min-h-screen place-items-center">
      <div className="card w-96 shadow-xl flex flex-col gap-y-4 p-8 shadow-cyan-500/50">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <InputField
          type="identifier"
          label="email"
          name="email"
          defaultValue="test@test.com"
        />
        <InputField
          type="password"
          label="Password"
          name="Password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-block btn-secondary">
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
