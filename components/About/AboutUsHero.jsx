import React from "react";
import Navbar from "../Global/Navbar";

const AboutUsHero = ({ heading }) => {
  return (
    <main className="home-hero h-[80vh] w-full relative">
      <Navbar />
      <div className="w-full pt-20 2xl:pt-40 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight lg:leading-[68px]">
          {heading}
        </h1>
      </div>
    </main>
  );
};

export default AboutUsHero;
