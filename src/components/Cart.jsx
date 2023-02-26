import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {cartItems?.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}

          {/* <!-- Cart Items Ends --> */}
        </div>

        {/* <!-- Bill Details --> */}
        <BillDetails />
      </div>
    </div>
  );
};

export default Cart;
