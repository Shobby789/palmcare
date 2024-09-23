import ThemeContext from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";

const NewsCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col relative group ${
        theme ? "bg-dark" : "bg-white custom-shadow"
      }`}
    >
      <div className="w-full h-[180px] overflow-hidden 2xl:h-[220px] relative">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoYXJpdHklMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <div className="w-full p-5 flex flex-col items-start gap-2 relative pt-10">
        <span className="bg-[#F1C40F] text-xs font-medium text-white px-4 py-2 rounded-br-lg absolute top-0 left-0">
          Childcare
        </span>
        <Link
          href={"/"}
          className="font-bold quicksand-fonts text-base hover:underline transition-all duration-500"
        >
          10 Ways To Give To Charity Without Your Budget.
        </Link>
        <p
          className={`${
            theme ? "text-gray-400" : "text-[#3f3f3f]"
          } text-[13px]`}
        >
          Despite facing significant financial constraints, this organization
          continues
        </p>
        <Link
          href={"/"}
          className={`${
            theme ? "text-gray-500" : "text-[#3f3f3f]"
          } text-[13px] font-semibold underline`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
