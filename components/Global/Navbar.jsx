import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav
      className={`w-full py-4 lg:py-6 2xl:py-6 flex items-center justify-between horizontal-padding z-50 bg-transparent text-white`}
    >
      <Link href="/" className="flex items-center gap-x-2">
        {/* <img
          src="/file.png"
          alt=""
          className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
        /> */}
        <span className={`font-semibold text-xl md:text-3xl 2xl:text-4xl `}>
          logo
        </span>
      </Link>
      <div className="hidden lg:flex items-center gap-x-10">
        <Link
          href="/"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none`}
        >
          About
        </Link>
        <Link
          href="/team"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none`}
        >
          Team
        </Link>
        <Link
          href="/projects"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none`}
        >
          Projects
        </Link>
        <Link
          href="/events"
          className={`text-[17px] 2xl:text-[18px] font-medium outline-none`}
        >
          Events
        </Link>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
