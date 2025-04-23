import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTAButton = ({ text = "Apply Now", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:scale-105 bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem]"
    >
      <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
        <span className="group-hover:text-white transition-colors duration-300">
          {text}
        </span>
        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
      </div>
    </button>
  );
};

export default CTAButton;
