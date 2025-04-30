import React from "react";
import { ArrowUpRight } from "lucide-react";

const CommunityButton = ({
  text = "Join Our Community",
  onClick,
  bgColor = "#FFC107",
  hoverBgColor = "#1E1E20",
  textColor = "#1E1E20",
  hoverTextColor = "#FFFFFF",
  stripColor = "#1E1E20",
}) => {
  return (
    <button
      onClick={onClick}
      className="hover:scale-105 cursor-pointer font-bold px-4 md:px-4 lg:px-6 xl:px-8 py-9 md:py-3 lg:py-4 xl:py-4 rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-sm lg:text-base"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Left stripe that grows on hover */}
      <span
        className="absolute top-0 bottom-0 left-1/2 w-0 group-hover:w-1/2 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300"
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Middle stripe that's visible by default */}
      <span
        className="absolute top-0 bottom-0 left-1/2 w-px transform -translate-x-1/2 transition-all duration-300"
        style={{ backgroundColor: stripColor }}
      ></span>

      {/* Right stripe that grows on hover */}
      <span
        className="absolute top-0 bottom-0 right-1/2 w-0 group-hover:w-1/2 transform translate-x-full group-hover:translate-x-0 transition-all duration-300"
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Content container */}
      <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
        <span className="group-hover:text-white transition-colors duration-300">
          {text}
        </span>
        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
      </div>
    </button>
  );
};

export default CommunityButton;
