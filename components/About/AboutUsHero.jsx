import React from "react";
import Navbar from "../Global/Navbar";

const AboutUsHero = () => {
  return (
    <main className="home-hero h-[70vh] w-full relative border-b">
      <Navbar />
      <div className="w-full pt-16 2xl:pt-40 flex flex-col items-start justify-center gap-5 horizontal-padding text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight lg:leading-[68px]">
          About Us
        </h1>
      </div>
    </main>
  );
};

export default AboutUsHero;
