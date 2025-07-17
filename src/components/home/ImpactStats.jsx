import React from "react";
import bgImage from "../../assets/armando-fera-i8IeYLEZ7hE-unsplash.jpg";
import { Users, Handshake, PackageCheck, Trophy } from "lucide-react";

const stats = [
  {
    icon: <Users size={36} />,
    value: "10+",
    label: "Dedicated Team Members",
  },
  {
    icon: <Handshake size={36} />,
    value: "80K+",
    label: "Community Members Assisted",
  },
  {
    icon: <PackageCheck size={36} />,
    value: "10K+",
    label: "Successful Aid Projects",
  },
  {
    icon: <Trophy size={36} />,
    value: "4K+",
    label: "Recognized Achievements",
  },
];

const ImpactStats = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay with black + yellow gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/70 via-black/70 to-black/70 z-0" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-2 py-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center px-4 space-y-4 relative ${index !== stats.length - 1
                ? "border-r-2 border-dotted border-[#FFC107]"
                : ""
              }`}
          >
            {/* Icon with border and no background */}
            <div className="p-3 border-2 border-white rounded-full">
              <div className="text-white">{stat.icon}</div>
            </div>
            <h3 className="text-6xl font-bold">{stat.value}</h3>
            <p className="text-xl font-semibold text-white text-opacity-90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
