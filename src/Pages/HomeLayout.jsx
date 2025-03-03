import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="max-w-6xl mx-auto px-8 py-24">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
