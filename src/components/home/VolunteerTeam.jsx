import { useState } from "react";
import { Instagram, Facebook, Twitter, Plus, X } from "lucide-react";

// Simulated imports since we don't have access to the actual assets
const handshake = "/api/placeholder/400/320";
import volunteer01 from "../../assets/volunteer01.jpg";
import volunteer02 from "../../assets/volunteer02.jpg";
import volunteer03 from "../../assets/volunteer.jpg";

import Slogan from "../sub-comp/slogan";
import CTAButton from "../sub-comp/Button";
// :ock components based on the imports in the original code

const VolunteerCard = ({ name, role, image }) => {
  const [showSocial, setShowSocial] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltDirection, setTiltDirection] = useState({ x: 0, y: 0 });

  // Handle tilt effect
  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate the position of the mouse relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the tilt direction
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 30;
    const tiltY = (centerX - x) / 30;

    setTiltDirection({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltDirection({ x: 0, y: 0 });
  };

  // Social media icons
  const socialIcons = [
    { icon: <Instagram size={16} />, name: "Instagram" },
    { icon: <Facebook size={16} />, name: "Facebook" },
    { icon: <Twitter size={16} />, name: "Twitter" },
  ];

  return (
    <div
      className={`bg-gray-100 rounded-xl overflow-hidden relative transition-all duration-300 cursor-pointer ${isHovered ? "shadow-lg" : ""}`}
      style={{
        transform: `perspective(1000px) rotateX(${tiltDirection.x}deg) rotateY(${tiltDirection.y}deg)`,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => console.log(`View details for ${name}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[22rem] object-cover transition-transform duration-300 hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 to-transparent"></div>
        )}

        {/* Social media icons */}
        <div
          className={`absolute right-4 top-[76%] -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 ${showSocial ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {socialIcons.map((social, index) => (
            <button
              key={index}
              className="bg-white text-gray-800 hover:bg-yellow-500 hover:text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transform transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: showSocial ? "translateX(0)" : "translateX(20px)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Open ${social.name} for ${name}`);
              }}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`p-8 transition-all duration-300 ${isHovered ? "bg-[#101828]" : "bg-[#FAE7F3]"}`}
      >
        <h3
          className={`text-lg font-semibold transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-800"}`}
        >
          {name}
        </h3>
        <p
          className={`transition-colors duration-300 ${isHovered ? "text-[#FFC107]" : "text-gray-600"}`}
        >
          {role}
        </p>
      </div>

      <button
        className={`absolute top-[74%] right-4 p-1 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 z-10 ${
          showSocial ? "bg-[#FFC107] rotate-0" : "bg-[#101828] rotate-0"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setShowSocial(!showSocial);
        }}
      >
        {showSocial ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <Plus className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
};

export default function VolunteerTeamSection() {
  const volunteers = [
    {
      id: 1,
      name: "Michel Fokluz",
      role: "Volunteer",
      image: volunteer01,
    },
    {
      id: 2,
      name: "Arian Drobloas",
      role: "Volunteer",
      image: volunteer02,
    },
    {
      id: 3,
      name: "Jara Klintof",
      role: "Volunteer",
      image: volunteer03,
    },
    {
      id: 4,
      name: "Aiden Markram",
      role: "Volunteer",
      image: volunteer01,
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Slogan />
        </div>
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-2">
            <span className="text-dark-green">Meet Our Volunteer</span>
            <br />
            <span className="text-[#1E1E02]">The </span>
            <span className="text-yellow-500">Board</span>{" "}
            <span className="text-dark-green">Members</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer.id}
              name={volunteer.name}
              role={volunteer.role}
              image={volunteer.image}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton
            text="View All"
            onClick={() => console.log("Button Clicked!!")}
          />
        </div>
      </div>
    </div>
  );
}
