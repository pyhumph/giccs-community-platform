import React from "react";
import { ArrowRight } from "lucide-react";

// Import icons (you'll need to create or import these SVG icons)
import EducationIcon from "../assets/education-icon.svg";
import HealthIcon from "../assets/health-icon.svg";
import EnvironmentIcon from "../assets/environment-icon.svg";
import BusinessIcon from "../assets/business-icon.svg";

export default function ServicesShowcase() {
  const services = [
    {
      id: 1,
      title: "Educational Access & Support",
      icon: EducationIcon,
      link: "/education",
    },
    {
      id: 2,
      title: "Health & Wellness",
      icon: HealthIcon,
      link: "/health",
    },
    {
      id: 3,
      title: "Environmental & Renewable Energy",
      icon: EnvironmentIcon,
      link: "/environment",
    },
    {
      id: 4,
      title: "Entrepreneurship & Small Business Grants",
      icon: BusinessIcon,
      link: "/business",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
    >
      <div className="container mx-auto px-4">
        {/* Small heading with icon */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="/path/to/handshake-icon.svg"
            alt="Support"
            className="h-8 w-auto mr-3"
          />
          <p
            className="text-[#FFC107] font-bold"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            Support Communities for a Better Future
          </p>
        </div>

        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Our Life-Changing Services
            <br />
            You'll Love
          </h2>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-between h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-auto mb-4"
                />
                <h3 className="text-gray-800 font-bold mb-2">
                  {service.title}
                </h3>
              </div>
              <a
                href={service.link}
                className="mt-4 text-[#FFC107] flex items-center justify-center hover:text-amber-600 transition-colors duration-300"
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Check Our Services button */}
        <div className="flex justify-center mt-10">
          <a
            href="/services"
            className="bg-[#FFC107] text-[#000000] font-bold px-8 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300"
          >
            Check Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
