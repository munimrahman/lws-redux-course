import React from "react";
import { Outlet } from "react-router-dom";
import SIdebar from "../../Sidebar/SIdebar";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SIdebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
