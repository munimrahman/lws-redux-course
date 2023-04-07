import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const auth = useSelector((state) => state.auth);
  const role = auth?.user?.role;
  const path = role === "admin" ? "/admin" : "/course/2";

  return !isLoggedIn ? children : <Navigate to={path} />;
};

export default PublicRoute;
