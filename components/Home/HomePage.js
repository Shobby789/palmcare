"use client";
import React, { useContext } from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import StatisticsSection from "./StatisticsSection";
import WhyDonateUs from "./WhyDonateUs";
import FeaturesSection from "./FeaturesSection";
import FatimaStory from "./FatimaStory";
import { AboutUsPage } from "../About/AboutUsPage";
import ThemeContext from "@/context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <StatisticsSection />
      <WhyDonateUs />
      <FeaturesSection />
      <FatimaStory />
      <AboutUsPage />
      <div
        className={`w-full horizontal-padding pb-20 ${
          theme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <p className="text-sm lg:w-[80%] text-center mx-auto">
          <span className="font-semibold">Join Us:</span> Be a part of this
          ongoing impact—your support can light up homes, empower families, and
          create a legacy of hope. Together, let’s bring the power of Sadaqah
          Jariyah to those who need it most
        </p>
      </div>
    </div>
  );
};

export default HomePage;
