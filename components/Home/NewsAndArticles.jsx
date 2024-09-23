"use client";
import React, { useContext } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import NewsCard from "../Global/NewsCard";
import ThemeContext from "@/context/ThemeContext";

const NewsAndArticles = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`w-full pt-12 pb-24 horizontal-padding relative ${
        theme
          ? "bg-dark text-white news-and-articles-dark"
          : "bg-white text-black news-and-articles"
      }`}
    >
      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg accent" />
          <span className="text-[18px] font-bold accent quicksand-fonts">
            Articles News & Blog
          </span>
        </div>
        <h2 className="section-heading text-center">Latest News & Blog</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default NewsAndArticles;
