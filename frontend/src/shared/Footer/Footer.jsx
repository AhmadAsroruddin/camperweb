import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  IconSelect,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="container w-full shadow-lg font-urbanist bg-gray-100">
      <div className="mt-8 w-full p-4 top-0">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="logo" className="h-14" />
          </Link>
          <span className="block text-sm text-black sm:text-center dark:text-gray-400">
            © 2024 Polaris™. All Rights Reserved.
          </span>
          <p className="block text-sm text-black sm:flex">
            English (Us) <IconSelect className="opacity-60 h-5 p-1" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
