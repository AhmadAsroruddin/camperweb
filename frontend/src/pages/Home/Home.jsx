import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import logoWhite from "../../assets/logo-white.png";
import NavbarLogin from "../../shared/Navbar/NavbarLogin";
import { useNavigate } from "react-router-dom";
import AuthService from "../Auth/services/AuthServices";
import HeroHome from "./Component/HeroHome";
import TravelList from "../Campervan/Components/CampervanList"

const Home = () => {
  const navigate = useNavigate();
  const authService = AuthService();

  useEffect(() => {
    
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <NavbarLogin textColor="text-white" logo={logoWhite} bgColor='bg-red bg-opacity-50' />
      <HeroHome />
      <TravelList limit={4} />
      {/* <NewsList limit={1} /> */}
    </>
  );
};

export default Home;
