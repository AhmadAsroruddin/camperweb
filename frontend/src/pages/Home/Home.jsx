import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import TravelList from "../Travels/Components/TravelList";
import NewsList from "../News/Components/NewsList";
import logoWhite from "../../assets/logo-white.png";
import NavbarLogin from "../../shared/Navbar/NavbarLogin";
import HeroHome from "./Component/HeroHome";
import { useNavigate } from "react-router-dom";
import AuthService from "../Auth/services/AuthServices";

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
      <NavbarLogin textColor="text-white" logo={logoWhite} bgColor='bg-black bg-opacity-50' />
      <HeroHome />
      <TravelList limit={4} />
      <NewsList limit={1} />
      <Footer/>
    </>
  );
};

export default Home;
