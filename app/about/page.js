import AboutUsHero from "@/components/About/AboutUsHero";
import { AboutUsPage } from "@/components/About/AboutUsPage";
import WhyDonateUs from "@/components/About/WhyDOnateUs";
import Navbar from "@/components/Global/Navbar";
import Navbar2 from "@/components/Global/Navbar2";
import AboutSection from "@/components/Home/AboutSection";
import EventsAndPrograms from "@/components/Home/EventsAndPrograms";
import StatisticsSection from "@/components/Home/StatisticsSection";
import React from "react";

export const metadata = {
  title: "Palmcare - About",
  description: "Palmcare Charity About Us Page",
};

const page = () => {
  return (
    <div>
      <Navbar2 />
      {/* <AboutUsHero heading={"About Us"} />
      <AboutSection />
      <StatisticsSection />
      <WhyDonateUs />
      <EventsAndPrograms /> */}
      <AboutUsPage />
    </div>
  );
};

export default page;
