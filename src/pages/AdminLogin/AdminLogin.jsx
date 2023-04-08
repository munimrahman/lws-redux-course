import React from "react";
import logo from "../../assets/image/learningportal.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import useTitle from "../../hooks/useTitle";

const AdminLogin = () => {
  useTitle("Admin Login");
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={logo} alt="" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Admin Account
          </h2>
          <LoginForm title={"admin"} />
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
