import logo from "../../../assets/logo.png";
import confirmation from "../../../assets/confirmation.png";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="relative font-urbanist">
        <img src={logo} alt="logo" className="absolute py-3 px-6 h-20" />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div
            className="bg-[#07C9F0] bg-opacity-10 rounded-xl flex flex-col items-center mt-10 py-8 shadow-lg"
            style={{ width: "calc(100% - 450px)"}}
          >
            <img src={confirmation} alt="confirmation" className="w-[300px] -mt-10" />
            <div className="px-16 space-y-4 text-center">
              <h1 className="text-3xl font-bold">Confirm Your Email</h1>
              <p>
                Hi, we're excited to have you! You're about to unlock access to
                new ways of interesting. First, please verify your email.
              </p>
            </div>
            <button
              onClick={handleClick}
              className="bg-[#07C9F0] py-2 px-14 rounded-3xl mt-3 active:scale-95"
            >
              <span className="font-semibold text-white text-sm">
                Go to Log in Page
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
