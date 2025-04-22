import React from "react";
import { ArrowRight } from "lucide-react";

// Card Component
const ActionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow">
      <div
        className="rounded-full p-3 mb-4"
        style={{ backgroundColor: "rgba(144, 238, 204, 0.2)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-center mb-4 text-sm">{description}</p>
      <button className="flex items-center text-sm text-gray-700 hover:text-orange-500 transition-colors mt-auto group">
        Read More
        <ArrowRight
          size={16}
          className="ml-1 group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
};

// Heart Icon Component
const HeartIcon = () => (
  <div className="absolute left-12 top-20">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10C17.5 5 12.5 4 9 7.5C5.5 11 6.5 16 10 19.5L20 29.5L30 19.5C33.5 16 34.5 11 31 7.5C27.5 4 22.5 5 20 10Z"
        fill="#4CD6A9"
        stroke="#4CD6A9"
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

// Donation Icon
const DonationIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22C14 22 23 18 23 12V5L14 2L5 5V12C5 18 14 22 14 22Z"
      fill="#4CD6A9"
      fillOpacity="0.2"
      stroke="#2D8F6D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 16C14 16 17 14 17 11V7L14 6L11 7V11C11 14 14 16 14 16Z"
      fill="#4CD6A9"
      stroke="#2D8F6D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Volunteer Icon
const VolunteerIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="14"
      cy="8"
      r="5"
      fill="#FF8157"
      fillOpacity="0.2"
      stroke="#E05D32"
      strokeWidth="1.5"
    />
    <path
      d="M23 25C23 20.0294 19 16 14 16C9 16 5 20.0294 5 25"
      stroke="#E05D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M14 16V25" stroke="#E05D32" strokeWidth="1.5" />
    <path
      d="M10 20H18"
      stroke="#E05D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Event Icon
const EventIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="6"
      width="20"
      height="18"
      rx="2"
      fill="#4CD6A9"
      fillOpacity="0.2"
      stroke="#2D8F6D"
      strokeWidth="1.5"
    />
    <path d="M4 11H24" stroke="#2D8F6D" strokeWidth="1.5" />
    <path
      d="M10 4V8M18 4V8"
      stroke="#2D8F6D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect x="8" y="15" width="4" height="4" rx="1" fill="#2D8F6D" />
    <rect x="16" y="15" width="4" height="4" rx="1" fill="#2D8F6D" />
  </svg>
);

// Main Component
const MissionVisionSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      <HeartIcon />

      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full">
          <span className="text-white text-sm font-medium">
            Upcoming Events
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Our Mission <span className="text-white">Vission</span> and
          <br />
          Targeted <span className="text-orange-500">Goals</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionCard
          icon={<DonationIcon />}
          title="Send Donations"
          description="Leveraging best practices and B2B edge productivity cutting solutions"
        />
        <ActionCard
          icon={<VolunteerIcon />}
          title="Become A Volunteer"
          description="Leveraging best practices and B2B edge productivity cutting solutions"
        />
        <ActionCard
          icon={<EventIcon />}
          title="Latest Events"
          description="Leveraging best practices and B2B edge productivity cutting solutions"
        />
      </div>
    </div>
  );
};

export default MissionVisionSection;
