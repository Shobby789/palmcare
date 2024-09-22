import React from "react";
import { MdFoundation } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { LiaUsersSolid } from "react-icons/lia";
import { PiFilesDuotone } from "react-icons/pi";

const StatisticsSection = () => {
  return (
    <section className="w-full py-6 horizontal-padding">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-5">
        <div className="flex flex-col items-center gap-3 border hover:border-[#F1C40F] transition-all duration-300 px-5 py-10 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold accent">35+</h2>
          <span className="quicksand-fonts font-bold text-[16px]">
            Years of Foundation
          </span>
          <MdFoundation className="w-10 md:w-12 h-10 md:h-12 accent" />
        </div>
        <div className="flex flex-col items-center gap-3 border hover:border-[#F1C40F] transition-all duration-300 px-5 py-10 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold accent">68+</h2>
          <span className="quicksand-fonts font-bold text-[16px]">
            Monthly Donate
          </span>
          <BiDonateBlood className="w-10 md:w-12 h-10 md:h-12 accent" />
        </div>
        <div className="flex flex-col items-center gap-3 border hover:border-[#F1C40F] transition-all duration-300 px-5 py-10 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold accent">8k+</h2>
          <span className="quicksand-fonts font-bold text-[16px]">
            Global Partners
          </span>
          <LiaUsersSolid className="w-10 md:w-12 h-10 md:h-12 accent" />
        </div>
        <div className="flex flex-col items-center gap-3 border hover:border-[#F1C40F] transition-all duration-300 px-5 py-10 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold accent">93+</h2>
          <span className="quicksand-fonts font-bold text-[16px]">
            Projects Complete
          </span>
          <PiFilesDuotone className="w-10 md:w-12 h-10 md:h-12 accent" />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
