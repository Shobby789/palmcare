import AboutUsHero from "@/components/About/AboutUsHero";
import TeamGrid from "@/components/Team/TeamGrid";
import React from "react";

export const metadata = {
  title: "Palmcare - Team",
  description: "Palmcare Charity Team Members",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutUsHero heading={"Our Team"} />
      <TeamGrid />
    </div>
  );
};

export default page;
