import React, { useState, useEffect } from "react";
import Slogan from "./slogan";
import CTAButton from "./Button";
import heart from "../assets/balloon-hearts (1).png";
import city from "../assets/city.png";
import topImage from "../assets/inner-top.jpg";
import buildingImage from "../assets/inner-main.jpg";
import bottomImage from "../assets/inner-bottom.jpg";
import { Phone, CheckCircle, Play } from "lucide-react";
import phone from "../assets/phone-call (2).png";

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
    <section className="bg-white max-w-screen-2xl mx-auto py-16 px-12 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-center flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Image Area */}
        <div className="relative w-full lg:w-[30rem] flex justify-center">
          {/* Main building image */}
          <img
            src={buildingImage}
            alt="Inner Center Building"
            className="w-full h-[38rem] outline-white outline-12 object-cover ml-7 rounded-2xl shadow-2xl"
          />

          {/* Top floating image */}
          <img
            src={topImage}
            alt="Class Session"
            className="absolute top-0 left-0 lg:w-54 rounded-2xl lg:h-50 object-cover outline-8 outline-white sm:w-40 md:w-48 shadow-2xl -translate-x-1/3 -translate-y-1/3"
          />

          {/* L-Shape line from bottom of main image to bottom floating image */}
          <div className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 h-16">
            {/* Horizontal part of L */}
            <div className="absolute bottom-16 right-16 w-24 h-3 bg-yellow-400 rounded-full"></div>
            {/* Vertical part of L */}
            <div className="absolute bottom-0 right-16 w-3 h-16 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Bottom floating image */}
          <img
            src={bottomImage}
            alt="Meditation Session"
            className="absolute bottom-0 lg:w-54 rounded-2xl lg:h-50 object-cover outline-8 outline-white right-19 w-32 sm:w-40 md:w-48 shadow-lg translate-x-1/3 translate-y-1/3"
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
              <div className="relative z-10 bg-yellow-400 rounded-full p-6 cursor-pointer shadow-lg transition-transform hover:scale-110">
                <Play size={32} fill="white" color="white" />
              </div>
            </div>
          </a>

          {/* Vertical label */}
          <div className="absolute left-[-2.2rem] top-[43rem] -translate-y-1/2 rotate-[-90deg] origin-left bg-black text-white w-[35rem] px-10 py-8 tracking-wide shadow-md lg:text-[1.4rem] sm:text-base font-extrabold border-l-6 border-r-6 border-[#FFC107] rounded-r-2xl rounded-l-2xl">
            Welcome Inner Center <span className="text-[#FFC107]">Open</span> 12
            Hours
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex items-center mb-2">
            <Slogan />
          </div>
          <h2 className="lg:text-5xl md:text-4xl font-extrabold tracking-wide text-[#1E1E20]">
            Empowering Communities <br /> Through Our{" "}
            <span className="text-[#FFC107]">Inner Center</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our Inner Center is a free facility available to individuals and
            organizations dedicated to uplifting the community. It serves as a
            hub for learning, empowerment, and transformation.
          </p>

          {/* Empower Lives and Create Change Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
            {/* Empower Lives */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-4">
                <div className="bg-[#FFC107] p-3 rounded-full mr-3">
                  <img src={city} className="w-auto h-12" alt="City icon" />
                </div>
                <h3 className="text-xl font-bold">Empower Lives</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Providing A Free Space For Impactful Programs That Uplift The
                Community.
              </p>
            </div>

            {/* Create Change */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-4">
                <div className="bg-[#FFC107] p-3 rounded-full mr-3">
                  <img
                    src={heart}
                    className="w-auto h-12"
                    alt="Heart balloon icon"
                  />
                </div>
                <h3 className="text-xl font-bold">Create Change</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Supporting Initiatives That Enhance Education, Health, And
                Economic.
              </p>
            </div>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Counseling, Therapy Sessions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Stress Management Workshops
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Grow Small Businesses Training
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Training on Waste Management
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Digital Literacy, Financial Ed.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />
                Meditation & Dev. Training
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />{" "}
                Hygiene & Health Education
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-[#FFC107] font-extrabold"
                />{" "}
                Chronic Disease Management
              </li>
            </ul>
          </div>

          {/* CTA and Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <CTAButton text="View All" />
            <div className="flex flex-col items-center lg:items-start mr-32">
              <p className="font-semibold text-gray-700 mb-1">Phone</p>
              <div className="flex items-center text-gray-800 text-base">
                <img src={phone} alt="" className="w-auto h-8" />{" "}
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
