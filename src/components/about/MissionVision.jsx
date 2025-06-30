import React from "react";
import {
  ArrowRight,
  Heart,
  Users,
  Calendar,
  GraduationCap,
  Stethoscope,
  Leaf,
} from "lucide-react";
import Slogan from "../sub-comp/slogan";

// Card Component
const ActionCard = ({ icon, title, description, color = "green" }) => {
  const colorVariants = {
    green: {
      bg: "rgba(76, 214, 169, 0.1)",
      iconBg: "rgba(76, 214, 169, 0.2)",
      border: "border-green-200",
      hover: "hover:border-green-300",
      text: "text-green-700",
    },
    orange: {
      bg: "rgba(255, 129, 87, 0.1)",
      iconBg: "rgba(255, 129, 87, 0.2)",
      border: "border-orange-200",
      hover: "hover:border-orange-300",
      text: "text-orange-700",
    },
    blue: {
      bg: "rgba(59, 130, 246, 0.1)",
      iconBg: "rgba(59, 130, 246, 0.2)",
      border: "border-blue-200",
      hover: "hover:border-blue-300",
      text: "text-blue-700",
    },
  };

  const variant = colorVariants[color];

  return (
    <div
      className={`bg-white rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 border ${variant.border} ${variant.hover} transform hover:-translate-y-1`}
    >
      <div
        className="rounded-full p-4 mb-4"
        style={{ backgroundColor: variant.iconBg }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Heart Icon Component with sparkles
const HeartIcon = () => (
  <div className="absolute left-4 md:left-8 top-16 md:top-20 animate-bounce">
    <svg
      width="60"
      height="60"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      <path
        d="M20 10C17.5 5 12.5 4 9 7.5C5.5 11 6.5 16 10 19.5L20 29.5L30 19.5C33.5 16 34.5 11 31 7.5C27.5 4 22.5 5 20 10Z"
        fill="#4CD6A9"
        stroke="#2D8F6D"
        strokeWidth="1.5"
      />
      <path
        d="M25 4L28 7M31 10L34 13M28 13L31 16"
        stroke="#FFD166"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// Floating circles decoration
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-32 right-16 w-20 h-20 bg-orange-400 opacity-10 rounded-full animate-pulse"></div>
    <div className="absolute bottom-32 left-20 w-16 h-16 bg-green-400 opacity-10 rounded-full animate-pulse delay-300"></div>
    <div className="absolute top-1/2 right-8 w-12 h-12 bg-blue-400 opacity-10 rounded-full animate-pulse delay-700"></div>
  </div>
);

// Education Icon
const EducationIcon = () => (
  <GraduationCap size={32} className="text-green-600" />
);

// Health Icon
const HealthIcon = () => <Stethoscope size={32} className="text-orange-600" />;

// Environment Icon
const EnvironmentIcon = () => <Leaf size={32} className="text-blue-600" />;

// Community Icon
const CommunityIcon = () => <Users size={32} className="text-green-600" />;

// Main Component
const GICCSMissionVision = () => {
  return (
    <section id="mission-vision">
      <div className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 px-4 overflow-hidden">
        <HeartIcon />
        <FloatingDecorations />

        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-16 text-center relative z-10">
          <div className="flex justify-center">
            <Slogan text="GICCS - Transforming Communities" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Mission &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Vision
            </span>
            <br />
            for <span className="text-orange-400">Tanzania</span>
          </h2>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              To support, train, participate and establish socially acceptable
              viable projects and activities that enhance the living quality of
              every Tanzanian. We are committed to creating sustainable change
              through community empowerment, education, health improvement, and
              environmental stewardship.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              A prosperous Tanzania where every community has access to quality
              education, healthcare, sustainable livelihoods, and environmental
              protection. We envision empowered citizens who contribute to
              national development through innovation, entrepreneurship, and
              responsible stewardship of natural resources.
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Key <span className="text-green-400">Objectives</span>
          </h3>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ActionCard
              icon={<EducationIcon />}
              title="Education Access"
              description="Facilitating accessibility of quality education particularly to youths and orphans, ensuring no child is left behind in their educational journey and future opportunities."
              color="green"
            />
            <ActionCard
              icon={<HealthIcon />}
              title="Better Health Services"
              description="Empowering communities to acquire better health services and treatment, improving overall community wellness and reducing preventable diseases."
              color="orange"
            />
            <ActionCard
              icon={<CommunityIcon />}
              title="Women Empowerment"
              description="Strengthening women and disabled individuals by imparting entrepreneurship skills, fostering financial independence and social inclusion."
              color="blue"
            />
          </div>

          {/* Second row - Centered single card */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-[25rem]">
              <ActionCard
                icon={<Leaf />}
                title="Renewable Energy"
                description="Promoting renewable energy solutions to reduce environmental impact while providing sustainable power sources for rural and urban communities."
                color="orange"
              />
            </div>
          </div>

          {/* Commented out cards for reference */}
          {/* 
  <ActionCard
    icon={<EnvironmentIcon />}
    title="Environmental Protection"
    description="Advocating for environment protection and implementing sustainable waste management projects to preserve our natural heritage for future generations."
    color="green"
  />
  
  <ActionCard
    icon={<Users />}
    title="Agriculture & Livestock"
    description="Empowering communities with modern animal husbandry techniques and good farming methods to improve food security and income generation."
    color="blue"
  />
  */}
        </div>
        {/* Call to Action */}
        {/*<div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Together, we can transform communities and build a better Tanzania
            for all
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
              Get Involved <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>*/}
      </div>
    </section>
  );
};

export default GICCSMissionVision;
