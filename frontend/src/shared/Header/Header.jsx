import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import laut from "../../assets/mas-laut.jpg";

function Header() {
  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open)
  }
  return (
    <div className="font-urbanist flex items-center justify-between shadow-lg px-[25px] py-2">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search for..."
        />
        <div className="bg-primary h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <IconSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[15px] relative" onClick={showDropDown}>
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
          {
            open &&
            <div className="bg-white border h-[80px] w-[120px] absolute bottom-[-100px] z-20 right-0 pt-[15px] pl-[15px]">
              <p className="cursor-pointer hover:text-primary font-semibold">User Profile</p>
              <p className="cursor-pointer hover:text-primary font-semibold">Logout</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
