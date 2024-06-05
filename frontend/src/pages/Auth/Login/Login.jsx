/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import LoginImage from "../../../assets/bromo-mount.jpg";
import LoginForm from "./Component/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex font-urbanist">
        {/* Left side */}
        <div className="w-1/2 h-screen bg-cover">
          <img
            src={logo}
            alt="logo"
            className="absolute py-3 px-6 h-20"
          />
          <img
            src={LoginImage}
            alt="login-image"
            className="h-screen bg-contain"
          />
        </div>

        {/* Right side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <div className="pace-y-3">
              <h1 className="text-3xl font-bold">Welcome Back &#128075;</h1>
            </div>

            <LoginForm />

            <div className="mt-3">
              <p className="text-sm">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  href="#"
                  className="text-[#07C9F0] hover:text-sky-700"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
