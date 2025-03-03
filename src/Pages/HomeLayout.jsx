import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-6xl mx-auto px-8 py-24">
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
