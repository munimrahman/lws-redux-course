import React from "react";
import logo from "../../assets/image/learningportal.svg";
import LoginForm from "../../components/LoginForm/LoginForm";

const AdminLogin = () => {
  return (
    <section class="py-6 bg-primary h-screen grid place-items-center">
      <div class="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img class="h-12 mx-auto" src={logo} alt="" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Admin Account
          </h2>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
