"use client";
import React, { useContext } from "react";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers, volunteers } from "@/constants/TeamMembers";
import ThemeContext from "@/context/ThemeContext";

const TeamGrid = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full horizontal-padding py-40">
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-36 ${
          theme && "bg-dark text-white"
        }`}
      >
        {teamMembers.map((member, index) => {
          return <TeamMemberCard member={member} key={index} index={index} />;
        })}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-36 mt-20">
        {volunteers.map((v, index) => {
          return (
            <div
              className={`relative flex flex-col items-start ${
                theme ? "bg-dark text-white" : "bg-white text-black"
              }`}
            >
              {/* <div
                className={`h-[300px] overflow-x-hidden overflow-y-visible ${
                  theme ? "bg-[#1c1c1c]" : "bg-primary"
                } w-full relative`}
              > */}
              <img
                src={v?.image_url}
                alt=""
                className="w-[100%] left-3 h-[300px] bg-cover rounded-full"
              />
              {/* </div> */}
              <div className="w-full p-3">
                <h2 className="font-bold text-xl lg:text-2xl primary-text">
                  {v?.name}
                </h2>
                <h3
                  className={`text-[16px] font-semibold ${
                    theme ? "text-gray-400" : "text-[#2d2d2d]"
                  }`}
                >
                  {v?.designation}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamGrid;
