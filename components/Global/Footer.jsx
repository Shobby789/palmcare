"use client";
import React, { useContext, useRef } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      className={`w-full py-12 xl:py-24 2xl:py-32 grid grid-cols-1 md:lg:grid-cols-5 gap-6 horizontal-padding overflow-hidden ${
        theme ? "bg-dark text-white" : "bg-green-50 text-black"
      }`}
      ref={ref}
    >
      <div
        className="col-span-1 lg:col-span-2 2xl:pr-28 flex flex-col items-start justify-start gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          {/* <img
            src="/file.png"
            alt="   "
            className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
          /> */}
          <span className="font-normal text-2xl lg:text-4xl 2xl:text-5xl ">
            Logo
          </span>
        </Link>

        <p className="font-normal text-[16px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea
          excepturi vero saepe autem inventore!
        </p>

        <div className="flex items-center gap-4">
          <Link href="/" className="">
            <TiSocialFacebook className="w-full h-full text-2xl" />
          </Link>
          <Link href="/" className="">
            <FaInstagram className="w-full h-full text-lg" />
          </Link>
          <Link href="/" className="">
            <TiSocialTwitter className="w-full h-full text-2xl" />
          </Link>
          <Link href="/" className="">
            <TiSocialLinkedin className="w-full h-full text-2xl" />
          </Link>
        </div>
      </div>

      <div
        className="flex flex-col gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h3 className="text-xl 2xl:text-2xl font-bold">Company</h3>
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[16px] ">
            Home
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            About Us
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Team
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Projects
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Events
          </Link>
        </div>
      </div>

      <div
        className="flex flex-col gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h3 className="text-xl 2xl:text-2xl font-bold">Explore</h3>
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[16px] ">
            FAQs
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            How it works
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Qualifications
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Toolkits
          </Link>
        </div>
      </div>

      <div
        className="flex flex-col gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h3 className="text-xl 2xl:text-2xl font-bold">Quick Links</h3>

        <ul className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[16px] ">
            Get a job
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Recruit Talent
          </Link>
          <Link href="/" className="font-medium text-[16px] ">
            Donate
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
// bg-red-800 - left side div
// bg-red-900 - right side div
