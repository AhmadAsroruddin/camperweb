import React, { useState } from "react";
import laut from "../../assets/mas-laut.jpg";

function UserProfile() {
  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center gap-[15px] relative">
      <div
        className="flex items-center gap-[15px] relative"
        onClick={showDropDown}
      >
        <p>Biru Laut</p>
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
        {open && (
          <div className="bg-white border h-[80px] w-[120px] absolute bottom-[-100px] z-20 right-0 pt-[15px] pl-[15px]">
            <p className="cursor-pointer hover:text-primary font-semibold">
              User Profile
            </p>
            <p className="cursor-pointer hover:text-primary font-semibold">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
