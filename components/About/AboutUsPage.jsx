"use client";
import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../Global/Button";
import ThemeContext from "@/context/ThemeContext";

const para1 =
  "Palm Care was founded on the belief that basic needs such as shelter, food, and clean water should not be luxuries, but universal rights. Many of us are incredibly fortunate to be born into circumstances where these essentials are readily available. However, for countless others, these basic needs remain out of reach, hindering their ability to thrive and progress in life. Inspired by Maslow’s hierarchy of needs, we recognise that without meeting these fundamental requirements, individuals cannot focus on higher goals such as education, personal development, and community engagement. At Palm Care, we are dedicated to levelling the playing field by providing support to those who need it most, ensuring that everyone has the opportunity to live a life of dignity and possibility.";

const para2 =
  "Through our initiatives, we aim to make basic necessities accessible to the underprivileged, empowering them to move beyond mere survival and towards a future filled with hope and opportunity.";

export const AboutUsPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"}`}>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="Get to know us"
      >
        <ExampleContent
          heading={"Get to know us"}
          paragraph1={para1}
          paragraph2={para2}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="Our Story"
      >
        <ExampleContent
          heading={"Our Story"}
          paragraph1={para1}
          paragraph2={para2}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="Contributions"
      >
        <ExampleContent
          heading={"Contributions"}
          paragraph1={para1}
          paragraph2={para2}
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const handleNavigateToDonate = () => {
  window.location.href = "https://givebutter.com/vHIBtO";
};

const ExampleContent = ({ heading, paragraph1, paragraph2 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`mx-auto w-full lg:w-[90%] horizontal-padding ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center pt-12 pb-20">
        <p className="mb-4 text-[16px] leading-6">{paragraph1}</p>
        <p className="mb-8 text-[16px] leading-6">{paragraph2}</p>
        <Button onclick={handleNavigateToDonate} />
      </div>
    </div>
  );
};
