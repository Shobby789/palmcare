"use client";
import ThemeContext from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const TeamMemberCard = ({ member, index }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full relative group ${index % 2 === 0 ? "" : "lg:mt-12"} ${
        theme ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-auto relative overflow-hidden">
        <img
          src={member?.image_url}
          className="w-full h-[300px] object-cover"
        />
        <div className="w-full h-full absolute inset-0 z-10 bg-black text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 opacity-75 flex items-center px-4">
          <p className="text-sm font-medium opacity-100">{member?.bio}</p>
        </div>
      </div>
      <div className="w-full p-3">
        <h2 className="font-bold text-xl accent">{member?.name}</h2>
        <h3
          className={`text-[14px] font-medium ${
            theme ? "text-gray-400" : "text-[#2d2d2d]"
          }`}
        >
          {member?.designation}
        </h3>
      </div>
    </div>
  );
};

export default TeamMemberCard;
