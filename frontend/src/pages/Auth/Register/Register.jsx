/* eslint-disable no-unused-vars */
import React from "react";
import RegisterImage from "../../../assets/balaikambang-beach.jpg";
import logo from "../../../assets/logo-white.png";
import RegisterForm from "./Component/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
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
            src={RegisterImage}
            alt="register-image"
            className="h-screen bg-contain"
          />
        </div>

        {/* Right side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">
                Hi, Get Started Now &#128075;
              </h1>
              <p className="text-md ml-1">
                Enter details to create your Travel pulse account
              </p>
            </div>

            <RegisterForm />

            <div className="mt-3">
              <p className="text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  href="#"
                  className="text-[#07C9F0] hover:text-sky-700"
                >
                  Sign in to account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
