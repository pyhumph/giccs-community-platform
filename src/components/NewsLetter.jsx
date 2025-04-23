import Slogan from "./slogan";
import newz01 from "../assets/mustafa-alabri-9gz10zK7mWo-unsplash.jpg";
import newz02 from "../assets/kate-bezzubets-WBzkNwjpvwc-unsplash.jpg";
import newz03 from "../assets/jorge-maya-9AiE2wfpwvY-unsplash.jpg";
import CTAButton from "./Button";
import { useState } from "react";

export default function NewsletterSection() {
  const newsItems = [
    {
      id: 1,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: newz01,
    },
    {
      id: 2,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: newz02,
    },
    {
      id: 3,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: newz03,
    },
  ];

  // Card hover state for each card
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle card hover effects
  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the rotation angle based on mouse position
    // Dividing by higher numbers creates a more subtle effect
    const rotateX = (y - rect.height / 2) / 60;
    const rotateY = (rect.width / 2 - x) / 50;

    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Slogan />
        </div>
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold">
            <span className="text-[#1E1E20]">Our Latest </span>
            <span className="text-[#FFC107]">Newsletter</span>
            <span className="text-[#1E1E20]"> And</span>
            <br />
            <span className="text-[#1E1E20]">Insights You Like</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md w-[26rem] overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                transform:
                  hoveredCard === item.id
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-all duration-500"
                    style={{
                      transform:
                        hoveredCard === item.id
                          ? "scale(1.1) rotate(2deg)"
                          : "scale(1) rotate(0deg)",
                    }}
                  />
                </div>
                <div className="absolute bottom-[-1.5rem] font-bold text-2xl right-5 bg-[#FFC107] text-white px-[17px] py-0.5 rounded">
                  <div className="text-center font-bold">
                    {item.date.split(" ")[0]}
                  </div>
                  <div className="text-base font-medium">
                    {item.date.split(" ")[1]}
                  </div>
                </div>
              </div>

              <div className="p-5 h-52 mt-2 mb-3">
                <div className="text-[#FFC107] text-base font-bold mb-2 mt-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-black leading-[27px] mb-8 hover:text-[#FFC107] transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="-mx-4 mb-6">
                  <hr className="border-gray-300" />
                </div>

                <div className="flex justify-between text-gray-500 text-sm">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span className="text-base">Views ({item.views})</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span className="text-base">Shares</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton text="View All" />
        </div>
      </div>
    </div>
  );
}
