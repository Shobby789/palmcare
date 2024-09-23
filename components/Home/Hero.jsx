import React from "react";
import Navbar from "../Global/Navbar";

const Hero = () => {
  return (
    <main className="home-hero h-[110vh] w-full relative">
      <Navbar />
      <div className="w-full pt-16 2xl:pt-48 flex flex-col items-start justify-center gap-5 horizontal-padding text-white">
        <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight lg:leading-[98px]">
          Raise Your <br /> Helping Hand
        </h1>
        <h2 className="text-base lg:text-lg 2xl:text-2xl font-normal lg:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          temporibus quos, facilis laudantium excepturi cumque quasi numquam
          iusto quia aliquam.
        </h2>
        <button className="btn">Donate</button>
      </div>
    </main>
  );
};

export default Hero;
