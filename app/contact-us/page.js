import AboutUsHero from "@/components/About/AboutUsHero";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsHero from "@/components/ContactUs/ContactUsHero";
import Navbar from "@/components/Global/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <ContactUsHero /> */}
      <main className="contact-us-hero h-[40vh] lg:h-[80vh] w-full relative">
        <Navbar />
        <div className="w-full pt-20 lg:pt-24 2xl:pt-60 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
          <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight">
            Contact Us
          </h1>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
