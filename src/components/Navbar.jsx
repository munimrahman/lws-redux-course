import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

const Navbar = ({ handleNavigation }) => {
  const cart = useSelector((state) => state.products.cart);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>
        <div className="flex gap-4">
          <span
            onClick={() => handleNavigation("home")}
            className="navHome cursor-p"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </span>
          <span
            onClick={() => handleNavigation("cart")}
            className="navCart cursor-p"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCartItems}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
