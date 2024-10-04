"use client";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";
import Image from "next/image";
import React, { useContext, useRef } from "react";

const TeamMemberCard = ({ member, index }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    // <div ref={ref}>
    //   <div
    //     className={`w-full h-[300px] lg:h-[400px] border bg-yellow-500 border-black relative group ${
    //       index % 2 === 0 ? "" : "lg:mt-12"
    //     } ${theme ? "bg-dark text-white" : "bg-white text-black"}`}
    //     style={{
    //       transform: isInView ? "none" : "translateY(100px)",
    //       opacity: isInView ? 1 : 0,
    //       transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //     }}
    //   >
    //     <div className="w-full h-[auto] relative overflow-hidden">
    //       <img
    //         src={member?.image_url}
    //         className="w-full h-[300px] lg:h-[400px] object-cover"
    //       />
    //     </div>
    //     <div className="w-full p-3">
    //       <h2 className="font-bold text-xl lg:text-2xl primary-text">
    //         {member?.name}
    //       </h2>
    //       <h3
    //         className={`text-[16px] font-semibold ${
    //           theme ? "text-gray-400" : "text-[#2d2d2d]"
    //         }`}
    //       >
    //         {member?.designation}
    //       </h3>
    //     </div>
    //   </div>
    // </div>
    <div
      className={`relative flex flex-col items-start ${
        index % 2 === 0 ? "" : "lg:mt-12"
      } ${theme ? "bg-dark text-white" : "bg-white text-black"}`}
    >
      <div
        className={`h-[300px] ${
          theme ? "bg-[#1c1c1c]" : "bg-primary"
        } w-full relative`}
      >
        <img
          src={member?.image_url}
          alt=""
          className="absolute bottom-0 w-[90%] left-3"
        />
      </div>
      <div className="w-full p-3">
        <h2 className="font-bold text-xl lg:text-2xl primary-text">
          {member?.name}
        </h2>
        <h3
          className={`text-[16px] font-semibold ${
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
