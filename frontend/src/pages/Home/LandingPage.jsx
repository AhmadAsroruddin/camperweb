import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import logoWhite from "../../assets/logo-white.png";
import Hero from "./Component/Hero";
import About from "./Component/About";
import PopularDestination from "./Component/PopularDestination";

const LandingPage = () => {
  return (
    <>
      <Navbar textColor="text-white" logo={logoWhite} bgColor='bg-black bg-opacity-50' />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="popular-destination">
        <PopularDestination />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
