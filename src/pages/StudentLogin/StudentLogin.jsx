import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/learningportal.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import useTitle from "../../hooks/useTitle";

const StudentLogin = () => {
  useTitle("Student Login");
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={logo} alt="" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Student Account
          </h2>
        </div>
        <LoginForm title={"student"} />
        <div className="text-sm text-center mt-5">
          <Link
            to={"/registration"}
            className="font-medium text-violet-600 hover:text-violet-500"
          >
            Don't have an Account?{" "}
            <span className="text-white">Sign Up Here</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentLogin;
