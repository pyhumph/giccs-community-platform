import React from "react";
import { Users, Leaf, GraduationCap, Shield, Zap, Sprout } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Access",
      description:
        "To facilitate the accessibility of education particularly to youths and orphans.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Health Services",
      description:
        "To empower the community in acquiring better health services treatment",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women & Disabled Empowerment",
      description:
        "To strengthen women and the disabled by imparting them with entrepreneurship skills.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environment Protection",
      description:
        "To advocate for environment protection and waste management projects.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Renewable Energy",
      description: "To promote renewable energy.",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Agriculture Development",
      description:
        "To empower the community on animal husbandry and good farming methods.",
    },
  ];

  return (
    <div className="py-20 bg-[#1E1E20]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-[#FFC107]">Objectives</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Six key areas driving our mission to transform communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-[#FFC107]/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-white/10"
            >
              <div className="text-[#FFC107] mb-6 group-hover:scale-110 transition-transform duration-300">
                {objective.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFC107] transition-colors">
                {objective.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
