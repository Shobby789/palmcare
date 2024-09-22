import AboutUsHero from "@/components/About/AboutUsHero";
import WhyDonateUs from "@/components/About/WhyDOnateUs";
import AboutSection from "@/components/Home/AboutSection";
import EventsAndPrograms from "@/components/Home/EventsAndPrograms";
import StatisticsSection from "@/components/Home/StatisticsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutSection />
      <StatisticsSection />
      <WhyDonateUs />
      <EventsAndPrograms />
    </div>
  );
};

export default page;
