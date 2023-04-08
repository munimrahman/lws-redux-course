import React from "react";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const auth = useSelector((state) => state.auth);
  const isStudent = auth?.user?.role === "student" ? true : false;

  // console.log(isLoggedIn, isStudent);
  return isLoggedIn && isStudent ? children : <Navigate to={"/"} />;
};

export default StudentRoute;
