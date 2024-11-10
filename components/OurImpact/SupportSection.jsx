"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const SupportSection = () => {
  const { theme } = useContext(ThemeContext);
  const handleNavigateToDonate = () => {
    window.location.href = "https://givebutter.com/vHIBtO";
  };

  return (
    <section
      className={`vertical-padding horizontal-padding ${theme && "bg-black"}`}
    >
      <div
        className={`w-full text-center vertical-padding rounded-3xl px-6 ${
          theme ? "bg-[#1c1c1c] text-white" : "bg-yellow-200 text-black"
        }`}
      >
        <h2 className="section-heading">
          Be the Spark That Lights Up a Family’s Life
        </h2>
        <p className="mt-4 text-lg">
          Your support can bring the power of solar energy to families in need.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleNavigateToDonate}
            className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-full"
          >
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
