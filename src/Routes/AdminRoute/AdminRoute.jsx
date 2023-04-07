import React from "react";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const auth = useSelector((state) => state.auth);
  const isAdmin = auth?.user?.role === "admin" ? true : false;

  console.log(isLoggedIn, isAdmin);
  return isLoggedIn && isAdmin ? children : <Navigate to={"/admin-login"} />;
};

export default AdminRoute;
