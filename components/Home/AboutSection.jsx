"use client";
import ThemeContext from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";
import Button from "../Global/Button";
import { useInView } from "framer-motion";

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
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full vertical-padding horizontal-padding ${
        theme && "bg-[#000] text-white"
      }`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center gap-6">
          <Image
            width={349}
            height={240}
            src={"/assets/about-image-1.jpg"}
            className="h-[240px] md:h-[390px] w-[48%] object-cover"
          />
          <img
            src={
              "https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
            }
            className="h-[300px] md:h-full w-[48%] object-cover"
          />
        </div>

        <div
          className="flex flex-col items-start gap-6 overflow-hidden"
          ref={ref}
        >
          <div
            className="flex items-center gap-2"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <FaHandHoldingHeart className="text-lg primary-text" />
            <span className="text-[18px] font-bold primary-text quicksand-fonts">
              About logo
            </span>
          </div>
          <h2
            className="section-heading"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Helping is Great Virtue for Every Human’s
          </h2>
          <p
            className={`text-[16px] leading-6 ${
              theme ? "text-[#fff]" : "text-[#2d2d2d]"
            }`}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
                  <div
                    className="flex items-center gap-2"
                    key={i}
                    style={{
                      transform: isInView ? "none" : "translateY(100px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                    }}
                  >
                    <div className="w-5 h-5 bg-primary rounded-full p-1">
                      <FaCheck className="w-full h-full text-white" />
                    </div>
                    <span className="text-[16px] leading-5 font-medium">
                      {r}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start gap-2">
              {charity_reasons2.map((r, i) => {
                return (
                  <div
                    className="flex items-center gap-2"
                    key={i}
                    style={{
                      transform: isInView ? "none" : "translateY(100px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                    }}
                  >
                    <div className="w-5 h-5 bg-primary rounded-full p-1">
                      <FaCheck className="w-full h-full text-white" />
                    </div>
                    <span className="text-[16px] leading-5 font-medium">
                      {r}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
