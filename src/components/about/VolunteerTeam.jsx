import { useState } from "react";
import { PlusCircle, ChevronRight, Heart } from "lucide-react";

// Individual Volunteer Card Component
const VolunteerCard = ({ name, image, onClick }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        <button
          onClick={onClick}
          className="absolute bottom-4 right-4 bg-green-800 text-white rounded-full p-1 hover:bg-green-700 transition-colors duration-300"
        >
          <PlusCircle size={24} />
        </button>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">Volunteer</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const VolunteerTeamSection = () => {
  const [volunteers] = useState([
    {
      id: 1,
      name: "Michel Fokluz",
      image: "/api/placeholder/400/500",
    },
    {
      id: 2,
      name: "Arian Drobloas",
      image: "/api/placeholder/400/500",
    },
    {
      id: 3,
      name: "Jara Klintof",
      image: "/api/placeholder/400/500",
    },
    {
      id: 4,
      name: "Aiden Markram",
      image: "/api/placeholder/400/500",
    },
  ]);

  const handleCardClick = (id) => {
    console.log(`Volunteer ${id} details clicked`);
    // Here you could open a modal with more details or navigate to a detail page
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header with Logo */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-green-800">
          <Heart className="mr-2 fill-green-700 stroke-green-800" size={20} />
          <span className="font-medium cursor-pointer hover:underline">
            Start Donating Poor People
          </span>
        </div>
        <div className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="fill-green-700">
            <path d="M50,10 C30,10 15,25 15,50 C15,75 35,90 50,90 C65,90 85,75 85,50 C85,40 80,25 65,15 C55,25 45,25 35,15 C45,10 50,10 50,10 Z" />
          </svg>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Meet Our Volunteer
        </h2>
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-500">Team</span>
          <span className="text-gray-800"> Members</span>
        </h2>
      </div>

      {/* Volunteer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer.id}
            name={volunteer.name}
            image={volunteer.image}
            onClick={() => handleCardClick(volunteer.id)}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300">
          View All
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </section>
  );
};

export default VolunteerTeamSection;
