import React from "react";

const DonationCauseCard = () => {
  return (
    <div className="w-full flex flex-col shadow-lg">
      <div className="w-full">
        <img
          src="https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
          alt=""
          className="w-full h-[240px] object-cover"
        />
      </div>
      <div className="w-full relative px-5 pt-20 lg:pt-14 pb-5">
        <div className="w-full absolute bg-transparent -top-8 left-0">
          <div className="mx-auto rounded-md shadow-md pt-5 pb-4 px-6 bg-white w-[90%]">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2.5">
              <div class="bg-yellow-400 h-1.5 rounded-full w-[80%]"></div>
            </div>
            <p className="quicksand-fonts text-xs md:text-sm font-medium">
              $556.00 Donated of $6000.00 Goals
            </p>
          </div>
        </div>
        <h2 className="text-base font-bold mb-3">
          Help Differently Abled Person to Feel Confident
        </h2>
        <div className="w-full border-t grid grid-cols-3 lg:grid-cols-5 gap-2 py-3">
          <div className="flex flex-col gap-1">
            <span className="quicksand-fonts font-bold text-[14px]">Goal</span>
            <span className="quicksand-fonts font-bold text-[14px]">$1000</span>
          </div>
          <div className="w-[1.5px] h-[45px] bg-gray-100 hidden lg:block"></div>
          <div className="flex flex-col gap-1">
            <span className="quicksand-fonts font-bold text-[14px]">
              Raised
            </span>
            <span className="quicksand-fonts font-bold text-[14px]">$1000</span>
          </div>
          <div className="w-[1.5px] h-[45px] bg-gray-100 hidden lg:block"></div>
          <div className="flex flex-col gap-1">
            <span className="quicksand-fonts font-bold text-[14px]">To Go</span>
            <span className="quicksand-fonts font-bold accent text-[14px]">
              $1000
            </span>
          </div>
        </div>
        <button className="btn mt-3">Donate</button>
      </div>
    </div>
  );
};

export default DonationCauseCard;