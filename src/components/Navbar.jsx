import React from "react";
import { FaUser } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[90px] border-b-[1px] border-gray-800">
        <div className="logo">
          <h3 className="text-[25px] font-[700] sp-text">Genix</h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <button
            onClick={toggleTheme}
            className="icon hover:scale-110 transition-transform cursor-pointer"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <HiSun size={24} /> : <IoMoon size={24} />}
          </button>
          <div className="icon">
            <FaUser />
          </div>
          <div className="icon">
            <RiSettings3Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
