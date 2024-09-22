import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonationCauseCard from "../Global/DonationCauseCard";
// import CausesSwiper from "./CausesSwiper";

const CausesForDonation = () => {
  return (
    <section className="w-full vertical-padding horizontal-padding">
      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg accent" />
          <span className="text-[18px] font-bold accent quicksand-fonts">
            Popular Causes
          </span>
        </div>
        <h2 className="text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight lg:leading-[38px] 2xl:leading-[48px] lg:w-1/2 text-center">
          Give Donations For Latest Causes
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
