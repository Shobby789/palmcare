"use client";
import React, { useContext, useRef } from "react";
import { MdFoundation } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { LiaUsersSolid } from "react-icons/lia";
import { PiFilesDuotone } from "react-icons/pi";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer-motion";

const StatisticsSection = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full py-6 horizontal-padding ${
        theme && "bg-dark text-white"
      }`}
    >
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-5"
        ref={ref}
      >
        <div
          className={`flex flex-col items-center gap-3 border group ${
            theme
              ? " primary-border hover:border-[#2ECC71]"
              : "hover:border-[#2ECC71] primary-border"
          } transition-all duration-300 px-5 py-14 2xl:py-16`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2ECC71] transition-all duration-300">
            35+
          </h2>
          <span className="quicksand-fonts font-bold text-[16px] text-[#2ECC71] transition-all duration-300">
            Years of Foundation
          </span>
          <MdFoundation className="w-10 md:w-12 h-10 md:h-12 text-[#2ECC71] transition-all duration-300" />
        </div>
        <div
          className={`flex flex-col items-center gap-3 border group ${
            theme
              ? " primary-border hover:border-[#2ECC71]"
              : "hover:border-[#2ECC71] primary-border"
          } transition-all duration-300 px-5 py-14 2xl:py-16`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2ECC71] transition-all duration-300">
            68+
          </h2>
          <span className="quicksand-fonts font-bold text-[16px] text-[#2ECC71] transition-all duration-300">
            Monthly Donate
          </span>
          <BiDonateBlood className="w-10 md:w-12 h-10 md:h-12 text-[#2ECC71] transition-all duration-300" />
        </div>
        <div
          className={`flex flex-col items-center gap-3 border group ${
            theme
              ? " primary-border hover:border-[#2ECC71]"
              : "hover:border-[#2ECC71] primary-border"
          } transition-all duration-300 px-5 py-14 2xl:py-16`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2ECC71] transition-all duration-300">
            8k+
          </h2>
          <span className="quicksand-fonts font-bold text-[16px] text-[#2ECC71] transition-all duration-300">
            Global Partners
          </span>
          <LiaUsersSolid className="w-10 md:w-12 h-10 md:h-12 text-[#2ECC71] transition-all duration-300" />
        </div>
        <div
          className={`flex flex-col items-center gap-3 border group ${
            theme
              ? " primary-border hover:border-[#2ECC71]"
              : "hover:border-[#2ECC71] primary-border"
          } transition-all duration-300 px-5 py-14 2xl:py-16`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2ECC71] transition-all duration-300">
            93+
          </h2>
          <span className="quicksand-fonts font-bold text-[16px] text-[#2ECC71] transition-all duration-300">
            Projects Complete
          </span>
          <PiFilesDuotone className="w-10 md:w-12 h-10 md:h-12 text-[#2ECC71] transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
