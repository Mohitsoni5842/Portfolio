import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "Experties",
      link: "#experties",
    },
    {
      id: 3,
      name: "Work",
      link: "#work",
    },
    {
      id: 4,
      name: "Resume",
      link: "#",
    },
    {
      id: 5,
      name: "Contact",
      link: "Contact.jsx",
    },
  ];
  return (
    <>
      {/* HEADER */}
      <div className="header w-full h-30 flex justify-center">
        <div className="navigate w-full h-30 flex items-center justify-between px-6">
          {/* Logo */}
          <div
            className="logo w-60 h-30 md:w-60 md:h-30 lg:w-80 lg:h-40  bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>

          <div className="nav hidden lg:flex w-290 h-30 items-center">
            {navLinks.map((item) => (
              <div
                key={item.id}
                className="menu flex items-center text-[#bec1c3] justify-center text-2xl font-bold w-58 h-30 hover:text-green-200 cursor-pointer transition-colors duration-200"
              >
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </div>

          {/* Menu Button (mobile only) */}
          <button
            className="menubutton lg:hidden w-10 h-10  flex items-center justify-center rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoClose className="text-white w-6 h-6" />
            ) : (
              <ImMenu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((item) => (
          <div
            key={item.id}
            className="px-6 py-4 text-2xl font-bold text-[#bec1c3] border-b border-gray-800 hover:text-white cursor-pointer transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;

