import AboutUsHero from "@/components/About/AboutUsHero";
import EventGrid from "@/components/Events/EventGrid";
import Navbar from "@/components/Global/Navbar";
import React from "react";

export const metadata = {
  title: "Palmcare - Events",
  description: "Palmcare Charity Upcoming Events",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="events-hero h-[40vh] lg:h-[80vh] w-full relative">
        <Navbar />
        <div className="w-full pt-20 lg:pt-24 2xl:pt-60 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
          <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight">
            Events
          </h1>
        </div>
      </main>
      <EventGrid />
    </div>
  );
};

export default page;
