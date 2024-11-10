"use client";
import React from "react";

const SupportSection = () => {
  const handleNavigateToDonate = () => {
    window.location.href = "https://givebutter.com/vHIBtO";
  };

  return (
    <section className="vertical-padding horizontal-padding">
      <div className="w-full bg-yellow-200 text-center text-black vertical-padding rounded-3xl px-6">
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
