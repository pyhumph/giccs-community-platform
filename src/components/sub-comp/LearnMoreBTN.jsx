import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const LearnMoreButton = ({
  text = "Learn More",
  onClick,
  bgColor = "rgba(194, 179, 179, 0.45)", // Tailwind: bg-[#C2B3B3]/45
  hoverOverlayColor = "#FFC107",
  textColor = "#FFFFFF",
  hoverTextColor = "#000000",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:scale-105 transition-transform cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative overflow-hidden duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] group"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* Hover overlay */}
      <span
        className="absolute inset-0 transform origin-center transition-transform duration-300"
        style={{
          backgroundColor: hoverOverlayColor,
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
        }}
      ></span>

      <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
        <span
          className="transition-colors duration-300"
          style={{
            color: isHovered ? hoverTextColor : textColor,
          }}
        >
          {text}
        </span>
        <ArrowUpRight
          className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform"
          style={{
            color: isHovered ? hoverTextColor : textColor,
            transform: isHovered
              ? "translateX(4px) rotate(45deg)"
              : "translateX(0) rotate(0)",
          }}
        />
      </div>
    </button>
  );
};

export default LearnMoreButton;
