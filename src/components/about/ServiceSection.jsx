import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import spade from "../../assets/spade-base.png";
import spiral from "../../assets/hand-with-love.svg";

// Circular ServiceCard Component
const ServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-xl border-4"
        style={{ borderColor: color }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
          style={{ backgroundColor: color }}
        >
          {icon.element}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
        <button className="flex items-center text-gray-700 font-medium hover:text-blue-500 transition-colors">
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const SpiralAnimation = () => (
  <div className="absolute right-0 bottom-0">
    <div className="animate-none">
      <img src={spiral} alt="spiral" className="w-70 h-80 animate-none" />
    </div>
  </div>
);

const SpadeAnimation = () => (
  <div className="absolute left-24 top-60">
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
          opacity: 0.8;
          transform: scale(0.95);
        }
        50% {
          opacity: 1;
          transform: scale(2.05);
        }
        100% {
          opacity: 0.8;
          transform: scale(0.95);
        }
      }

      .animate-gentle-pulse {
        animation: gentlePulse 12s ease-in-out infinite;
      }
    `}</style>
    <div className="animate-float">
      <img src={spade} alt="spade" className="w-35 h-35 animate-gentle-pulse" />
    </div>
  </div>
);

// Main Component with Triangle Formation
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
      icon: {
        element: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      },
      title: "Kids Education",
      description: "Philanthropically to cultivate distinctively empower",
      color: "#FF7D54",
    },
    {
      icon: {
        element: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      title: "Good Health",
      description: "Philanthropically to cultivate distinctively empower",
      color: "#4AD295",
    },
    {
      icon: {
        element: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
        ),
      },
      title: "Healthy Food",
      description: "Philanthropically to cultivate distinctively empower",
      color: "#27D0F3",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-orange-500 font-medium">Change Everything</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            We're here to <span className="text-orange-500">Help</span>
          </h2>
        </div>

        <SpadeAnimation />
        <SpiralAnimation />

        {/* Triangle Formation with Services */}
        <div className="hidden md:block">
          {" "}
          {/* Desktop view */}
          <div
            ref={containerRef}
            className="relative mx-auto"
            style={{ height: "700px", maxWidth: "1000px" }}
          >
            {dimensions.width > 0 && (
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <marker
                    id="dot1"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                  >
                    <circle cx="5" cy="5" r="4" fill="#FF7D54" />
                  </marker>
                  <marker
                    id="dot2"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                  >
                    <circle cx="5" cy="5" r="4" fill="#4AD295" />
                  </marker>
                  <marker
                    id="dot3"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                  >
                    <circle cx="5" cy="5" r="4" fill="#27D0F3" />
                  </marker>
                </defs>

                {/* Curved path from Kids Education to Healthy Food */}
                <path
                  d={`M ${dimensions.width / 2},110 Q ${dimensions.width * 0.75},300 ${dimensions.width * 0.75},500`}
                  fill="none"
                  stroke="#FF7D54"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  markerEnd="url(#dot3)"
                />

                {/* Curved path from Healthy Food to Good Health */}
                <path
                  d={`M ${dimensions.width * 0.75},500 Q ${dimensions.width / 2},600 ${dimensions.width * 0.25},500`}
                  fill="none"
                  stroke="#27D0F3"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  markerEnd="url(#dot2)"
                />

                {/* Curved path from Good Health to Kids Education */}
                <path
                  d={`M ${dimensions.width * 0.25},500 Q ${dimensions.width * 0.25},300 ${dimensions.width / 2},110`}
                  fill="none"
                  stroke="#4AD295"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  markerEnd="url(#dot1)"
                />
              </svg>
            )}

            {/* Top Center - Kids Education */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <ServiceCard {...services[0]} />
            </div>

            {/* Bottom Left - Good Health */}
            <div
              className="absolute"
              style={{
                top: "500px",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ServiceCard {...services[1]} />
            </div>

            {/* Bottom Right - Healthy Food */}
            <div
              className="absolute"
              style={{
                top: "500px",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ServiceCard {...services[2]} />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-8">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
