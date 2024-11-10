"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const ImpactStatistics = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`vertical-padding horizontal-padding text-center ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="section-heading">Our Reach</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">200+</p>
          <p className="mt-2">Families Empowered</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">10,000+</p>
          <p className="mt-2">Hours of Light Provided</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">500+</p>
          <p className="mt-2">Children’s Dreams Supported</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;