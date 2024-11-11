"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import ThemeContext from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <nav
      className={`w-full py-4 lg:py-6 2xl:py-6 flex items-center justify-between horizontal-padding z-40 bg-transparent text-white relative`}
    >
      <Link href="/" className="flex items-center gap-x-2 z-50">
        <img
          src="/assets/palmcare-logo-2.webp"
          alt=""
          className="block w-14 lg:w-20 rounded-xl"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-x-10">
        <Link
          href="/"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
        >
          Home
        </Link>
        {/* <Link
          href="#about-us"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
        >
          About Us
        </Link> */}
        <Link
          href="/team"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
        >
          Team
        </Link>

        <Link
          href="/our-impact"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
        >
          Our Impact
        </Link>
        <Link
          href="/contact-us"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
        >
          Contact
        </Link>
        <ThemeToggler />
      </div>

      <div className="flex items-center justify-end gap-4 lg:hidden">
        <ThemeToggler />
        <button className="w-10 h-10 block z-50" onClick={handleOpenSidebar}>
          <BiMenuAltRight className="text-white w-8 h-10 z-8" />
        </button>
      </div>

      {/* mobile */}
      <div
        className={`w-full h-screen absolute inset-0 bg-transparent z-50 ${
          openSidebar ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div
          className={`p-7 relative h-full w-2/3 float-end shadow-xl ${
            theme ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <button
            className={`block z-50 absolute left-4 top-4 bg-white ${
              openSidebar
                ? "opacity-100 transition-all duration-1000"
                : "opacity-0"
            } `}
            onClick={handleOpenSidebar}
          >
            <IoClose className={`w-6 h-6 z-10 text-black`} />
          </button>
          <Link href="/" className="mt-5 z-50">
            <img
              src="/assets/palmcare-logo-2.webp"
              alt=""
              className="block w-20"
            />
          </Link>
          <div className="flex flex-col items-start gap-y-5 pt-10">
            <Link
              href="/"
              className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
            >
              Home
            </Link>

            <Link
              href="/team"
              className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
            >
              Team
            </Link>

            <Link
              href="/our-impact"
              className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
            >
              Our Impact
            </Link>
            <Link
              href="/contact-us"
              className={`text-[17px] 2xl:text-[18px] font-medium outline-none z-50`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
