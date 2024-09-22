import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import NewsCard from "../Global/NewsCard";

const NewsAndArticles = () => {
  return (
    <section className="w-full pt-12 pb-24 horizontal-padding relative news-and-articles">
      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg accent" />
          <span className="text-[18px] font-bold accent quicksand-fonts">
            Articles News & Blog
          </span>
        </div>
        <h2 className="text-2xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight lg:leading-[38px] 2xl:leading-[48px] text-center">
          Latest News & Blog
        </h2>
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
