import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Features/UserSlice";
import { clear } from "../Features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const queryClient = useQueryClient();
  const handleLogout = async () => {
    navigate("/");
    dispatch(clear());
    dispatch(logoutUser());
    // queryClient.removeQueries();
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="max-w-6xl px-8 mx-auto flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-primary btn-lg btn-outline"
              onClick={handleLogout}
            >
              logOut
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create an Account
            </Link>
          </div>
        )}
        {/* USER */}
        {/* lINKS */}
      </div>
    </header>
  );
};

export default Header;
