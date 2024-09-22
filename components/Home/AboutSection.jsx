import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";

const charity_reasons = [
  "Charity For Education",
  "Charity For Medical Helath",
  "Charity For Clean Water",
];

const charity_reasons2 = [
  "Charity For Pets",
  "Charity For Education",
  "Charity For Church",
];

const AboutSection = () => {
  return (
    <section className="w-full vertical-padding horizontal-padding">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center gap-5">
          <img
            src={
              "https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/about-2-2-1.jpeg"
            }
            className="h-[240px] md:h-[340px] w-[48%] object-cover"
          />
          <img
            src={
              "https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
            }
            className="h-[300px] md:h-[410px] w-[48%] object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="text-lg accent" />
            <span className="text-[18px] font-bold accent quicksand-fonts">
              About logo
            </span>
          </div>
          <h2 className="text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight lg:leading-[38px] 2xl:leading-[48px]">
            Helping is Great Virtue for Every Human’s
          </h2>
          <p className="text-[13px] leading-5 text-[#2d2d2d]">
            It has been determined through research that when we feel to help,
            and that someone authentically needs our assistance, and that no
            trick is being played on us, we reliably do intervene.
            Interestingly, it has been found that we are less likely to help an
            examination of the intrinsic worth of helping others, transcending
            cultural, religious, and societal boundaries.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div className="flex flex-col items-start gap-2">
              {charity_reasons.map((r, i) => {
                return (
                  <div className="flex items-center gap-2" key={i}>
                    <div className="w-4 h-4 bg-primary rounded-full p-1">
                      <FaCheck className="w-full h-full text-white" />
                    </div>
                    <span className="text-[13px] leading-5 font-medium">
                      {r}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start gap-2">
              {charity_reasons2.map((r, i) => {
                return (
                  <div className="flex items-center gap-2" key={i}>
                    <div className="w-4 h-4 bg-primary rounded-full p-1">
                      <FaCheck className="w-full h-full text-white" />
                    </div>
                    <span className="text-[13px] leading-5 font-medium">
                      {r}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mt-4">Donate</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;