import React, { useEffect } from "react";
import TravelList from "./Components/CampervanList";
import Footer from "../../shared/Footer/Footer";
import logo from "../../assets/logo.png";
import NavbarLogin from "../../shared/Navbar/NavbarLogin";
import { useNavigate } from "react-router-dom";
import AuthService from "../Auth/services/AuthServices";

const Travels = () => {
  const navigate = useNavigate();
  const authService = AuthService(); // Pastikan AuthService dipanggil sebagai fungsi

  useEffect(() => {
    // Periksa apakah pengguna belum login, jika ya, navigasikan kembali ke halaman login
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <NavbarLogin textColor="text-black" logo={logo} bgColor="bg-white bg-opacity-80" />
      <div className="py-10 h-[86vh]">
        <TravelList />
      </div>
      <Footer/>
    </>
  );
};

export default Travels;
