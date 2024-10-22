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
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20 z-10"></div>

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
          Illuminating Lives with <br /> Solar Energy
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
          At Project Noor Foundation, we are dedicated to eradicating energy
          poverty in rural Pakistan by providing clean, safe, and sustainable
          solar power to families living without electricity.
        </h2>

        {/* Button */}
        <div
          className="relative flex items-center gap-3 lg:gap-x-4"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Button />
          <a
            href="#about-us"
            className="relative overflow-hidden bg-primary text-white font-medium py-2 px-4 rounded-full h-12 flex items-center"
          >
            Discover Our Impact
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
