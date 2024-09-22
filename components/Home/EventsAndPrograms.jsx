import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import EventCard from "../Global/EventCard";
import { EVENTS_PROGRAMS } from "@/constants/Events";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";
import Link from "next/link";

const EventsAndPrograms = () => {
  return (
    <section className="w-full vertical-padding horizontal-padding">
      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg accent" />
          <span className="text-[18px] font-bold accent quicksand-fonts">
            Events & Programs
          </span>
        </div>
        <h2 className="text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight lg:leading-[38px] 2xl:leading-[48px] text-center">
          Latest Events & Programs
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div>
          <EventCard />
        </div>
        <div className="flex flex-col items-start gap-5">
          {EVENTS_PROGRAMS.map((news, index) => {
            return (
              <div className="w-full flex items-start gap-4" key={index}>
                <div className="w-[40%] h-[120px] overflow-hidden relative">
                  <div className="bg-[#F1C40F] absolute top-0 px-2 pb-1 right-0 z-10">
                    <span className="text-[10px] text-white font-medium">
                      {news.tag}
                    </span>
                  </div>
                  <img
                    src={news.image}
                    alt=""
                    className="w-full object-cover h-[120px] hover:scale-110 transition-all duration-500 brightness-90"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-2 pt-2.5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <SlCalender className="text-sm accent" />
                      <span className="text-xs font-medium accent">
                        May 6, 2025
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuClock className="text-sm accent" />
                      <span className="text-xs font-medium accent">
                        08:00 AM
                      </span>
                    </div>
                  </div>
                  <h2 className="font-bold text-base">{news.title}</h2>
                  <Link
                    href={"/"}
                    className="text-[13px] font-medium underline text-gray-600"
                  >
                    Event Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsAndPrograms;
