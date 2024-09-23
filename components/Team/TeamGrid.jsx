"use client";
import React, { useContext } from "react";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "@/constants/TeamMembers";
import ThemeContext from "@/context/ThemeContext";

const TeamGrid = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full vertical-padding horizontal-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
        theme && "bg-dark text-white"
      }`}
    >
      {teamMembers.map((member, index) => {
        return <TeamMemberCard member={member} key={index} index={index} />;
      })}
    </div>
  );
};

export default TeamGrid;
