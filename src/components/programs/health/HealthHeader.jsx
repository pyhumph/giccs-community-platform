import React from "react";
import { ArrowUpRight } from "lucide-react";
import headerImg from "../../../assets/health_02.jpg";
import Slogan from "../../sub-comp/slogan";
import healthcare from "../../../assets/handshake_health.png";
import CTAButton from "../../sub-comp/Button";

const HealthHeader = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <Slogan
            text="Health Support Program in Communities"
            image={healthcare}
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          Supporting Communities Through Health Initiatives
        </h1>

        <p className="text-white/80 text-base md:text-lg max-w-2xl mb-8">
          Providing health support and resources to those who cannot afford
          treatment, focusing on chronic illnesses and preventative care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <CTAButton text="Volunteer Now" />
          <CTAButton />
        </div>
      </div>

      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.27,221.93,101.47C286.43,93.19,304.34,68.34,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HealthHeader;
