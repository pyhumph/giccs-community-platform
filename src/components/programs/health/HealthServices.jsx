import React from "react";
import {
  HeartPulse,
  Pill,
  FileCheck,
  Activity,
  Users,
  BookOpen,
} from "lucide-react";
import healthcare from "../../../assets/handshake_health.png";
import Slogan from "../../sub-comp/slogan";

const HealthServices = () => {
  const services = [
    {
      icon: <HeartPulse className="w-12 h-12 text-[#FFC107]" />,
      title: "Chronic Disease Management",
      description:
        "Support for individuals managing ongoing health conditions like diabetes, hypertension, and respiratory diseases.",
    },
    {
      icon: <Pill className="w-12 h-12 text-[#FFC107]" />,
      title: "Medication Assistance",
      description:
        "Help accessing essential medications for those who cannot afford them.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#FFC107]" />,
      title: "Health Screenings",
      description:
        "Regular health checkups and early detection services in underserved communities.",
    },
    {
      icon: <Activity className="w-12 h-12 text-[#FFC107]" />,
      title: "Emergency Care Support",
      description:
        "Assistance for families facing urgent medical situations without adequate resources.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#FFC107]" />,
      title: "Community Health Workshops",
      description:
        "Educational sessions on preventative care and health management practices.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#FFC107]" />,
      title: "Health Education Materials",
      description:
        "Development and distribution of resources that help communities understand and manage health issues.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Slogan text="Our Services in Communities" image={healthcare} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E20] mb-4">
            Health Support Services We Provide
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our health program offers a range of services designed to support
            individuals and communities who lack access to adequate healthcare
            resources. We focus on both treatment support and preventative
            measures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E1E20] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center text-[#FFC107] font-semibold group-hover:text-[#1E1E20] transition-colors duration-300"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthServices;
