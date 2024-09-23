"use client";
import React, { useContext } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonationCauseCard from "../Global/DonationCauseCard";
import ThemeContext from "@/context/ThemeContext";
// import CausesSwiper from "./CausesSwiper";

const CausesForDonation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`w-full vertical-padding horizontal-padding ${
        theme && "bg-dark text-white"
      }`}
    >
      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg accent" />
          <span className="text-[18px] font-bold accent quicksand-fonts">
            Popular Causes
          </span>
        </div>
        <h2 className="section-heading text-center">
          Give Donations For <br /> Latest Causes
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <DonationCauseCard />
        <DonationCauseCard />
      </div>
      {/* <div className="w-full relative"> */}
      {/* <CausesSwiper /> */}
      {/* </div> */}
    </section>
  );
};

export default CausesForDonation;
