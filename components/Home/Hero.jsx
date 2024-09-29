"use client";
import React, { useRef } from "react";
import Navbar from "../Global/Navbar";
import Button from "../Global/Button";
import { useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="h-[110vh] w-full relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/home-hero.mp4" type="video/mp4" />
        {/* Fallback text for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>

      {/* Content */}
      <div
        className="w-full pt-16 2xl:pt-48 flex flex-col items-start justify-center gap-5 horizontal-padding text-white z-40 relative"
        ref={ref}
      >
        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight lg:leading-[98px]"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Raise Your <br /> Helping Hand
        </h1>

        {/* Subtitle */}
        <h2
          className="text-base lg:text-lg 2xl:text-xl font-normal lg:w-1/2"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          temporibus quos, facilis laudantium excepturi cumque quasi numquam
          iusto quia aliquam.
        </h2>

        {/* Button */}
        <div
          className="relative"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Hero;
