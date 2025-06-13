import React, { useState } from "react";
import { Heart, Target } from "lucide-react";

const MissionVisionComp = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const content = {
    vision: {
      title: "Our Vision",
      text: "To enhance the quality of life of the low-income community through agriculture, health, environment, education and management of resources.",
      icon: <Target className="w-8 h-8" />,
    },
    mission: {
      title: "Our Mission",
      text: "To support, train, participate and establish socially acceptable viable projects or activities to enhance the living quality of every Tanzanian.",
      icon: <Heart className="w-8 h-8" />,
    },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#1E1E20]">Our </span>
            <span className="text-[#FFC107]">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driven by compassion, guided by purpose, united in action
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Tab Navigation */}
            <div className="md:w-1/3 bg-[#1E1E20] p-8">
              {Object.entries(content).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-6 rounded-2xl mb-4 transition-all duration-300 group ${
                    activeTab === key
                      ? "bg-[#FFC107] text-[#1E1E20]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`transition-colors ${activeTab === key ? "text-[#1E1E20]" : "text-[#FFC107]"}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xl font-semibold">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-12">
              <div className="transition-all duration-500 transform">
                <div className="mb-6 text-[#FFC107]">
                  {content[activeTab].icon}
                </div>
                <h3 className="text-3xl font-bold text-[#1E1E20] mb-6">
                  {content[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content[activeTab].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionComp;
