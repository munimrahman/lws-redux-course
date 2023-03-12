import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { filterByType } from "../../features/filter/filterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
      <Link to={"/"} onClick={() => dispatch(filterByType("all"))}>
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
