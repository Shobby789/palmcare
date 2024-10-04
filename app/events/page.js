import AboutUsHero from "@/components/About/AboutUsHero";
import EventGrid from "@/components/Events/EventGrid";
import React from "react";

export const metadata = {
  title: "Palmcare - Events",
  description: "Palmcare Charity Upcoming Events",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutUsHero heading={"Events"} />
      <EventGrid />
    </div>
  );
};

export default page;
