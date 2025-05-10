import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import entrepreneurBg from "../../../assets/entrepreneur-woman-01.jpg";

function EntrepreneurshipHeader() {
  return (
    <div className="relative w-full bg-[#1E1E20] h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Placeholder image with overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-20"></div>
      <div className="absolute inset-0 z-0">
        <img
          src={entrepreneurBg}
          alt="Women entrepreneurs building businesses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <SectionWrapper className="relative z-30 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-[#FFC107] text-[#1E1E20] font-bold py-1 px-4 rounded-full text-xs md:text-sm mb-4">
            Women Empowerment Program
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Entrepreneurship &{" "}
            <span className="text-[#FFC107]">Business Grants</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Supporting women entrepreneurs from the Shia Khoja Ithnaasheri
            Community and underserved areas to grow their businesses and achieve
            financial independence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#FFC107] text-[#1E1E20] px-6 py-3 rounded-full font-bold text-sm md:text-base flex items-center group transition-all duration-300 hover:bg-white">
              Apply Now
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="border-2 border-white hover:border-[#FFC107] hover:text-[#FFC107] px-6 py-[10px] rounded-full font-bold text-sm md:text-base transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default EntrepreneurshipHeader;
