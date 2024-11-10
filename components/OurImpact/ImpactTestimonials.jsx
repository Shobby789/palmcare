"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const ImpactTestimonials = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`vertical-padding horizontal-padding text-center ${
        theme ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="section-heading">Voices of Change</h2>
      <div className="mt-6 max-w-2xl mx-auto">
        <blockquote className="italic text-gray-700">
          “Solar power has truly changed our lives. We feel blessed.”
        </blockquote>
        <p className="mt-2">— Ayesha, Beneficiary</p>
      </div>
    </section>
  );
};

export default ImpactTestimonials;
