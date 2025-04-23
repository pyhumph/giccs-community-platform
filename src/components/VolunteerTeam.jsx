import { useState } from "react";
import slogan from "./slogan";
import handshake from "../assets/support.png";
import volunteer01 from "../assets/volunteer01.jpg";
import volunteer02 from "../assets/volunteer02.jpg";
import volunteer03 from "../assets/volunteer.jpg";
import Slogan from "./slogan";
import CTAButton from "./Button";

const VolunteerCard = ({ name, role, image }) => {
  return (
    <div className="bg-gray-100 rounded-md overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className="w-full h-[22rem] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <button className="absolute bottom-4 right-4 bg-dark-green text-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
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
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Slogan />
        </div>
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold mb-2">
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
