import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-black py-12 xl:py-24 2xl:py-32 grid grid-cols-1 md:lg:grid-cols-5 gap-6 horizontal-padding">
      <div className="col-span-1 lg:col-span-2 2xl:pr-28 flex flex-col items-start justify-start gap-6 2xl:gap-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <img
            src="/file.png"
            alt="   "
            className="block w-12 lg:w-14 2xl:w-16 rounded-2xl"
          /> */}
          <span className="font-normal text-xl 2xl:text-3xl ">Logo</span>
        </Link>

        <p className="font-normal text-[13px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea
          excepturi vero saepe autem inventore!
        </p>

        <div className="flex items-center gap-4">
          <Link href="/" className="">
            <TiSocialFacebook className="w-full h-full text-xl" />
          </Link>
          <Link href="/" className="">
            <FaInstagram className="w-full h-full text-base" />
          </Link>
          <Link href="/" className="">
            <TiSocialTwitter className="w-full h-full text-xl" />
          </Link>
          <Link href="/" className="">
            <TiSocialLinkedin className="w-full h-full text-2xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-sm font-semibold">Company</h3>
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[12px] ">
            Home
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            About Us
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Team
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Projects
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Events
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-sm font-semibold">Explore</h3>
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[12px] ">
            FAQs
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            How it works
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Qualifications
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Toolkits
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 2xl:gap-8">
        <h3 className="text-sm font-semibold">Quick Links</h3>

        <ul className="flex flex-col items-start gap-3">
          <Link href="/" className="font-medium text-[12px] ">
            Get a job
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
            Recruit Talent
          </Link>
          <Link href="/" className="font-medium text-[12px] ">
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
