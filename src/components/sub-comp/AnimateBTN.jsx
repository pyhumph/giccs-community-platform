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
      className="
        relative
        group
        overflow-hidden
        font-bold
        rounded-full
        transition-all
        duration-300
        cursor-pointer
        inline-flex
        items-center
        justify-center
        text-xs
        sm:text-sm
        md:text-base
        lg:text-base
        xl:text-lg
        px-6
        py-3
        sm:px-8
        sm:py-3
        md:px-8
        md:py-4
        lg:px-10
        lg:py-4
        hover:scale-105
      "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Left stripe */}
      <span
        className="
          absolute top-0 bottom-0 left-1/2 w-0
          group-hover:w-1/2
          transform -translate-x-full
          group-hover:translate-x-0
          transition-all duration-300
        "
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Middle stripe */}
      <span
        className="
          absolute top-0 bottom-0 left-1/2 w-px
          transform -translate-x-1/2
          transition-all duration-300
        "
        style={{ backgroundColor: stripColor }}
      ></span>

      {/* Right stripe */}
      <span
        className="
          absolute top-0 bottom-0 right-1/2 w-0
          group-hover:w-1/2
          transform translate-x-full
          group-hover:translate-x-0
          transition-all duration-300
        "
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-1 sm:gap-2">
        <span className="transition-colors duration-300 group-hover:text-white">
          {text}
        </span>
        <ArrowUpRight
          className="
            w-4 h-4
            sm:w-4 sm:h-4
            md:w-5 md:h-5
            lg:w-5 lg:h-5
            transition-all duration-300
            transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white
          "
        />
      </span>
    </button>
  );
};

export default CommunityButton;
