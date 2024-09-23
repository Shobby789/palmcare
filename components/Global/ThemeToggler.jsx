"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 2xl:w-9 2xl:h-9 rounded-full z-50 ${
        theme ? "bg-[#ffff] p-2 2xl:p-2" : "bg-[#1c1c1c] p-1.5 2xl:p-2"
      } flex items-center justify-center transition-all duration-500 outline-none`}
    >
      {theme ? (
        <FiSun
          className={`text-black w-full h-full ${
            theme ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        />
      ) : (
        <IoMoon
          className={`text-gray-100/20 w-full h-full ${
            theme ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </button>
  );
};

export default ThemeToggler;
