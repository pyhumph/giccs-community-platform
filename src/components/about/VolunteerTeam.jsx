import { useState } from "react";
import { PlusCircle, ChevronRight, Heart } from "lucide-react";
import thumbup from "../../assets/thumbs-up.svg";

// Individual Volunteer Card Component
const VolunteerCard = ({ name, image }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
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

const ThumbsUpAnimation = () => (
  <div className="fill-green-700">
    <div className="animate-none fill-green-700">
      <img
        src={thumbup}
        alt="thumbup"
        fill="#22c55e"
        className="w-auto h-auto fill-green-700 animate-none"
      />
    </div>
  </div>
);

// Main Component
const VolunteerTeamSection = () => {
  const [volunteers] = useState([
    {
      id: 1,
      name: "Michel Fokluz",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Arian Drobloas",
      image:
        "https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg",
    },
    {
      id: 3,
      name: "Jara Klintof",
      image:
        "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      name: "Aiden Markram",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-pleased-young-guy-dressed-maroon-casual-t-shirt-looking-smiling-camera-expresses-happyness-model-posing-isolated-yellow-people-youth-lifestyle-concept_176532-8508.jpg",
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
          <Heart className="mr-2 fill-green-700 stroke-green-800" size={25} />
          <span className="font-medium cursor-pointer hover:underline">
            Start Donating Poor People
          </span>
        </div>
        <div className="w-16 h-16">
          <ThumbsUpAnimation />
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
