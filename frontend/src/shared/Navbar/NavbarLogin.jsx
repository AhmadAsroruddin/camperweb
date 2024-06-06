import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import laut from "../../assets/mas-laut.jpg";
// import { getUserProfileAction } from "../../pages/UserProfile/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../pages/Auth/services/AuthServices";

const NavbarLogin = ({ textColor, logo, bgColor }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  // const userProfile = useSelector((state) => state.userProfile.userProfile);
  // const isLoading = useSelector((state) => state.userProfile.isLoading);

  useEffect(() => {
    // dispatch(getUserProfileAction());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };

  const authService = AuthService();
  const handleLogout = () => {
    authService.logout();
    navigate("/"); 
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
            <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="logo" className="h-14" />
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <Link to="/home">Home</Link>
              </li>
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <Link to="/travels">Travels</Link>
              </li>
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <Link to="/news">News</Link>
              </li>
              <li className="py-2 px-2 rounded-md active:bg-[#07C9F0]">
                <Link to="/trips">Open Trips</Link>
              </li>
            </ul>
          </div>
          <Link to="/user-profile">
            <div className="flex items-center gap-[15px] relative">
              <div
                className="flex items-center gap-[15px] relative"
                onClick={showDropDown}
              >
                <p>{'Guest'}</p>
                <div className="h-[50px] w-[50px] rounded-full bg-primary cursor-pointer flex items-center justify-center relative">
                  <button
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="btn btn-link"
                  >
                    <img
                      className="rounded-full cursor-pointer h-[45px] w-[45px]"
                      src={laut}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
