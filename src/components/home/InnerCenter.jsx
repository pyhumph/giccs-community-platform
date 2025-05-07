import React, { useState, useEffect } from "react";
import Slogan from "../sub-comp/slogan";
import CTAButton from "../sub-comp/Button";
import heart from "../../assets/balloon-hearts (1).png";
import city from "../../assets/city.png";
import topImage from "../../assets/inner-top.jpg";
import buildingImage from "../../assets/inner-main.jpg";
import bottomImage from "../../assets/inner-bottom.jpg";
import { Phone, CheckCircle, Play } from "lucide-react";
import phone from "../../assets/phone-call (2).png";
import grid from "../../assets/grid.png";
import hand from "../../assets/hand.png";
import parachute from "../../assets/parachute2.svg";
import BackToTopButton from "../sub-comp/BackToTopButton";

// Parachute Animation Component
const ParachuteAnimation = () => (
  <div className="absolute right-2 sm:right-4 md:right-8 top-0">
    <div className="animate-parachute">
      <img
        src={parachute}
        alt="Parachute"
        className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto"
      />
    </div>
  </div>
);

const GridAnimation = () => (
  <div className="absolute left-8 sm:left-16 md:left-32 lg:left-66 top-36 sm:top-64 md:top-96 lg:top-150 hidden sm:block">
    <div className="animate-bounce">
      <img
        src={grid}
        alt="grid"
        className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 lg:w-30 lg:h-40 animate-pulse"
      />
    </div>
  </div>
);

const HandAnimation = () => (
  <div className="absolute left-2 sm:left-4 md:left-8 top-20 sm:top-32 md:top-50 hidden sm:block">
    <div className="animate-bounce">
      <img
        src={hand}
        alt="hand"
        className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 lg:w-30 lg:h-40 animate-pulse"
      />
    </div>
  </div>
);

const InnerCenter = () => {
  const [isWaveAnimating, setIsWaveAnimating] = useState(false);

  // Toggle wave animation state every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaveAnimating((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12 overflow-hidden">
      <style jsx>{`
        @keyframes parachuteFall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(650px);
            opacity: 0;
          }
        }

        .animate-parachute {
          animation: parachuteFall 10s ease-in-out infinite;
        }
      `}</style>
      <GridAnimation />
      <HandAnimation />
      <ParachuteAnimation />

      <div className="max-w-7xl mx-auto flex justify-center flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
        {/* Left Image Area */}
        <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[30rem] flex justify-center mb-12 lg:mb-0">
          {/* Main building image */}
          <img
            src={buildingImage}
            alt="Inner Center Building"
            className="w-full h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[38rem] outline-white outline-8 sm:outline-10 lg:outline-12 object-cover ml-4 sm:ml-7 rounded-2xl shadow-2xl"
          />

          {/* Top floating image */}
          <img
            src={topImage}
            alt="Class Session"
            className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-54 rounded-2xl h-36 sm:h-40 md:h-44 lg:h-50 object-cover outline-4 sm:outline-6 md:outline-8 outline-white shadow-2xl -translate-x-1/4 sm:-translate-x-1/3 -translate-y-1/4 sm:-translate-y-1/3"
          />

          {/* L-Shape line from bottom of main image to bottom floating image */}
          <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 h-12 sm:h-16">
            {/* Horizontal part of L */}
            <div className="absolute bottom-12 sm:bottom-16 right-12 sm:right-16 w-16 sm:w-20 md:w-24 h-2 sm:h-3 bg-yellow-400 rounded-full"></div>
            {/* Vertical part of L */}
            <div className="absolute bottom-0 right-12 sm:right-16 w-2 sm:w-3 h-12 sm:h-16 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Bottom floating image */}
          <img
            src={bottomImage}
            alt="Meditation Session"
            className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-54 rounded-2xl h-36 sm:h-40 md:h-44 lg:h-50 object-cover outline-4 sm:outline-6 md:outline-8 outline-white shadow-lg translate-x-1/4 sm:translate-x-1/3 translate-y-1/4 sm:translate-y-1/3"
          />

          {/* Play button overlay */}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative">
              {/* Animated waves */}
              <div
                className={`absolute inset-0 rounded-full bg-yellow-400 opacity-30 transition-all duration-1000 scale-100 ${isWaveAnimating ? "scale-150 opacity-0" : ""}`}
              ></div>
              <div
                className={`absolute inset-0 rounded-full bg-yellow-400 opacity-30 transition-all duration-1000 delay-500 scale-100 ${isWaveAnimating ? "scale-150 opacity-0" : ""}`}
              ></div>

              {/* Main button */}
              <div className="relative z-10 bg-yellow-400 rounded-full p-4 sm:p-5 md:p-6 cursor-pointer shadow-lg transition-transform hover:scale-110">
                <Play
                  size={24}
                  className="sm:hidden"
                  fill="white"
                  color="white"
                />
                <Play
                  size={28}
                  className="hidden sm:block md:hidden"
                  fill="white"
                  color="white"
                />
                <Play
                  size={32}
                  className="hidden md:block"
                  fill="white"
                  color="white"
                />
              </div>
            </div>
          </a>

          {/* Vertical label */}
          <div className="absolute left-[-2.2rem] top-[26rem] sm:top-[32rem] md:top-[36rem] lg:top-[43rem] -translate-y-1/2 rotate-[-90deg] origin-left bg-black text-white w-[26rem] sm:w-[30rem] md:w-[33rem] lg:w-[35rem] px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 tracking-wide shadow-md text-sm sm:text-base md:text-lg lg:text-[1.4rem] font-extrabold border-l-4 sm:border-l-5 md:border-l-6 border-r-4 sm:border-r-5 md:border-r-6 border-[#FFC107] rounded-r-2xl rounded-l-2xl">
            Welcome Inner Center <span className="text-[#FFC107]">Open</span> 12
            Hours
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <Slogan />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#1E1E20]">
            Empowering Communities <br /> Through Our{" "}
            <span className="text-[#FFC107]">Inner Center</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our Inner Center is a free facility available to individuals and
            organizations dedicated to uplifting the community. It serves as a
            hub for learning, empowerment, and transformation.
          </p>

          {/* Empower Lives and Create Change Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-8">
            {/* Empower Lives */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-[#FFC107] p-2 sm:p-3 rounded-full mr-2 sm:mr-3">
                  <img
                    src={city}
                    className="w-auto h-8 sm:h-10 md:h-12 animate-pulse"
                    alt="City icon"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Empower Lives</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                Providing A Free Space For Impactful Programs That Uplift The
                Community.
              </p>
            </div>

            {/* Create Change */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-[#FFC107] p-2 sm:p-3 rounded-full mr-2 sm:mr-3">
                  <img
                    src={heart}
                    className="w-auto h-8 sm:h-10 md:h-12 animate-pulse"
                    alt="Heart balloon icon"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Create Change</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                Supporting Initiatives That Enhance Education, Health, And
                Economic.
              </p>
            </div>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-gray-700">
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Counseling, Therapy Sessions
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Stress Management Workshops
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Grow Small Businesses Training
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Training on Waste Management
              </li>
            </ul>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Digital Literacy, Financial Ed.
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Meditation & Dev. Training
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Hygiene & Health Education
              </li>
              <li className="flex items-center gap-1 sm:gap-2">
                <CheckCircle
                  size={16}
                  className="text-[#FFC107] font-extrabold sm:hidden"
                />
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold hidden sm:block"
                />
                Chronic Disease Management
              </li>
            </ul>
          </div>

          {/* CTA and Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <CTAButton text="View All" />
            <div className="flex flex-col items-center lg:items-start mr-8 sm:mr-16 md:mr-24 lg:mr-32">
              <p className="font-semibold text-gray-700 mb-1 text-sm sm:text-base">
                Phone
              </p>
              <div className="flex items-center text-gray-800 text-sm sm:text-base">
                <img src={phone} alt="" className="w-auto h-6 sm:h-8" />{" "}
                <span className="cursor-pointer hover:text-yellow-500 transition-transform duration-300">
                  {" "}
                  +255 785 044 220{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerCenter;
