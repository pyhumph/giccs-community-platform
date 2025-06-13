import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Heart, Zap, Users } from "lucide-react";
import spade from "../../assets/spade-base.png";
import spiral from "../../assets/hand-with-love.svg";
import Slogan from "../sub-comp/slogan";

// Placeholder images - in your actual implementation, replace these with your actual imports
//const spade =
// "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 C30 30, 30 50, 50 70 C70 50, 70 30, 50 10 Z' fill='%23ff6b35'/%3E%3C/svg%3E";
//const spiral =
//"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='120' viewBox='0 0 100 120'%3E%3Cpath d='M50 10 Q80 30 60 60 Q20 80 40 110' stroke='%234AD295' stroke-width='3' fill='none'/%3E%3C/svg%3E";

// Circular ServiceCard Component
const ServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:shadow-xl border-4"
        style={{ borderColor: color }}
      >
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full mb-3 md:mb-4"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center text-xs sm:text-sm md:text-sm leading-relaxed px-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const SpiralAnimation = () => (
  <div className="absolute right-0 bottom-0 hidden lg:block">
    <div className="animate-none">
      <img
        src={spiral}
        alt="spiral"
        className="w-20 h-24 xl:w-auto xl:h-auto animate-none"
      />
    </div>
  </div>
);

const SpadeAnimation = () => (
  <div className="absolute left-4 sm:left-8 lg:left-24 top-40 sm:top-52 lg:top-60 hidden lg:block">
    <style jsx>{`
      @keyframes floatAnimation {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      .animate-float {
        animation: floatAnimation 5s ease-in-out infinite;
      }

      @keyframes gentlePulse {
        0% {
          opacity: 0.6;
          transform: scale(0.95);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.05);
        }
        100% {
          opacity: 0.6;
          transform: scale(0.95);
        }
      }

      .animate-gentle-pulse {
        animation: gentlePulse 12s ease-in-out infinite;
      }
    `}</style>
    <div className="animate-float">
      <img
        src={spade}
        alt="spade"
        className="w-8 h-8 xl:w-36 xl:h-36 animate-gentle-pulse"
      />
    </div>
  </div>
);

// Main Component with Diamond Formation (4 circles)
export default function ServicesSection() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      icon: (
        <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
      ),
      title: "Learning",
      description:
        "Quality education programs and literacy initiatives for community empowerment.",
      color: "#FF7D54",
    },
    {
      icon: (
        <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
      ),
      title: "Wellness",
      description:
        "Healthcare services and wellness programs for healthier communities.",
      color: "#4AD295",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      title: "Clean Energy",
      description:
        "Sustainable solar and wind solutions for environmental responsibility.",
      color: "#27D0F3",
    },
    {
      icon: (
        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
      ),
      title: "Women's Enterprise",
      description:
        "Funding and mentorship for female entrepreneurs and business growth.",
      color: "#9B59B6",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <div className="flex justify-center">
            <Slogan />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
            We're here to <span className="text-orange-500">Help</span>
          </h2>
        </div>

        <SpadeAnimation />
        <SpiralAnimation />

        {/* Desktop/Tablet Diamond Formation */}
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="relative mx-auto"
            style={{ height: "800px", maxWidth: "1200px" }}
          >
            {dimensions.width > 0 && (
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  {services.map((service, index) => (
                    <marker
                      key={`dot${index}`}
                      id={`dot${index}`}
                      viewBox="0 0 10 10"
                      refX="5"
                      refY="5"
                      markerWidth="5"
                      markerHeight="5"
                    >
                      <circle cx="5" cy="5" r="4" fill={service.color} />
                    </marker>
                  ))}
                </defs>

                {/* Top to Right */}
                <path
                  d={`M ${dimensions.width / 2},120 Q ${dimensions.width * 0.75},250 ${dimensions.width * 0.85},400`}
                  fill="none"
                  stroke="#FF7D54"
                  strokeWidth="2"
                  strokeDasharray="8,6"
                  markerEnd="url(#dot2)"
                  opacity="0.7"
                />

                {/* Right to Bottom */}
                <path
                  d={`M ${dimensions.width * 0.85},400 Q ${dimensions.width * 0.75},550 ${dimensions.width / 2},680`}
                  fill="none"
                  stroke="#4AD295"
                  strokeWidth="2"
                  strokeDasharray="8,6"
                  markerEnd="url(#dot3)"
                  opacity="0.7"
                />

                {/* Bottom to Left */}
                <path
                  d={`M ${dimensions.width / 2},680 Q ${dimensions.width * 0.25},550 ${dimensions.width * 0.15},400`}
                  fill="none"
                  stroke="#27D0F3"
                  strokeWidth="2"
                  strokeDasharray="8,6"
                  markerEnd="url(#dot0)"
                  opacity="0.7"
                />

                {/* Left to Top */}
                <path
                  d={`M ${dimensions.width * 0.15},400 Q ${dimensions.width * 0.25},250 ${dimensions.width / 2},120`}
                  fill="none"
                  stroke="#9B59B6"
                  strokeWidth="2"
                  strokeDasharray="8,6"
                  markerEnd="url(#dot1)"
                  opacity="0.7"
                />
              </svg>
            )}

            {/* Top - Education */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <ServiceCard {...services[0]} />
            </div>

            {/* Right - Health */}
            <div
              className="absolute"
              style={{
                top: "400px",
                left: "85%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ServiceCard {...services[1]} />
            </div>

            {/* Bottom - Renewable Energy */}
            <div
              className="absolute"
              style={{
                top: "680px",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ServiceCard {...services[2]} />
            </div>

            {/* Left - Women's Business Grants */}
            <div
              className="absolute"
              style={{
                top: "400px",
                left: "15%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ServiceCard {...services[3]} />
            </div>
          </div>
        </div>

        {/* Mobile/Small Tablet view */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-8 sm:space-y-12">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <ServiceCard {...service} />
                {index < services.length - 1 && (
                  <div className="flex justify-center mt-4 sm:mt-6">
                    <div
                      className="w-0.5 h-8 sm:h-12"
                      style={{
                        background: `linear-gradient(to bottom, ${service.color}, ${services[index + 1].color})`,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
