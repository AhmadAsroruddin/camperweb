import { IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Travels",
    link: "/travels",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Open Trips",
    link: "/trips",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar__card">
        <div>
          <div className="flex items-center justify-start gap-4">
            <IconUserCircle size={50} className="text-gray-500" />
            <div>
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">User Login</h1>
            </div>
          </div>
        </div>
        <div className="text-black mt-12">
          <ul className="space-y-4 text-xl">
            {navbarLinks.map(({ name, link }) => (
              <li key={link}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
