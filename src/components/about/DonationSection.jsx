import React from "react";
import { ArrowRight } from "lucide-react";

// Component for the call-to-action buttons
const ActionButton = ({ text, primary = false, icon = false }) => {
  return (
    <button
      className={`flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        primary
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          : "bg-gray-800/60 text-white hover:bg-gray-800/80 backdrop-blur"
      }`}
    >
      {text}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

// Component for the icon with text
const IconWithText = ({ text }) => {
  return (
    <div className="flex items-center text-yellow-400 text-sm font-medium">
      <span className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </span>
      {text}
    </div>
  );
};

// Main Hero Section Component
const CharityDonationHero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-full">
        <div className="w-full h-full bg-yellow-400 opacity-80 clip-path-custom"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-black/60 z-10"></div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <IconWithText text="Start Donating Poor People" />

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Children Need Your Help By Donating Today
          </h1>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <ActionButton text="Discover More" icon={true} />
            <ActionButton text="Get A Quote" icon={true} primary={true} />
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-bottom"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1399267460/photo/african-children-from-an-orphanage-in-nairobi-kenya.jpg?s=612x612&w=0&k=20&c=5x3xKCH0xVEMDMIo6NDKpCQA6ZfAYx8hS7fXHFpW2pE=')`,
          }}
        ></div>
      </div>

      {/* Bottom wave design */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-20">
        <svg
          viewBox="0 0 1440 100"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

// Custom CSS for clip-path effect
const styles = `
  .clip-path-custom {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }
`;

// Main export component
export default function CharityHeroSection() {
  return (
    <>
      <style>{styles}</style>
      <CharityDonationHero />
    </>
  );
}
