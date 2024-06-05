import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ textColor, logo, bgColor }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-full ${textColor} font-urbanist transition-all duration-300 ${
        scrolled ? bgColor : ""
      }`}
    >
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          <div className="py-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="logo" className="h-14" />
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <a href="#hero">Home</a>
              </li>
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <a href="#about">About Us</a>
              </li>
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <a href="#popular-destination">Popular Destination</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleClick}
              className="bg-[#07C9F0] py-2 px-5 rounded-3xl active:scale-95"
            >
              <span className="font-semibold text-white text-sm">Log in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
