import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Slogan from "../sub-comp/slogan";
import user from "../../assets/friends.png";
import danielOle from "../../assets/olenjoolay pic.webp";
import mir from "../../assets/mir.jpg";
import muslim from "../../assets/muslim.jpg";

const BoardMembersSection = ({ selectedMemberId }) => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (selectedMemberId) {
      const index = boardMembers.findIndex((m) => m.id === selectedMemberId);
      if (index !== -1) {
        setActiveCard(index);
        const element = document.getElementById(`member-${selectedMemberId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [selectedMemberId]);

  const BoardMemberCard = ({ member, index, isActive, onClick }) => {
    return (
      <div className="relative group transition-all duration-700">
        {/* Main Card */}
        <div
          className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
            isActive ? "ring-4 ring-[#FFC107]/50" : ""
          }`}
        >
          {/* Image Section */}
          <div className="relative h-96 bg-gradient-to-br from-[#FFC107]/20 to-[#1E1E20]/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              </div>
            </div>

            {/* Floating Role Badge */}
            <div className="absolute top-4 right-4 bg-[#FFC107] text-[#1E1E20] px-3 py-1 rounded-full text-xs font-semibold">
              Board Member
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#1E1E20] mb-2 group-hover:text-[#FFC107] transition-colors">
              {member.name}
            </h3>
            <p className="text-[#FFC107] font-semibold mb-3 text-sm uppercase tracking-wide">
              {member.role}
            </p>
            <p
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
                isActive ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {member.description}
            </p>

            {/* Expand Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent click bubbling
                onClick(isActive ? null : index); // toggle
              }}
              className="mt-4 text-[#FFC107] cursor-pointer font-semibold text-sm hover:text-[#1E1E20] transition-colors flex items-center gap-1"
            >
              {isActive ? "Show Less" : "Learn More"}
              <ArrowRight
                className={`w-4 h-4 transition-transform ${isActive ? "rotate-90" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        {isActive && (
          <div className="mt-4 bg-[#1E1E20] rounded-2xl p-6 text-white animate-fade-in">
            <h4 className="text-lg font-semibold text-[#FFC107] mb-3">
              Professional Background
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              {member.description}
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <h5 className="font-semibold text-[#FFC107] mb-2">
                  Leadership Role
                </h5>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
              {/* <div className="flex-1">
                <h5 className="font-semibold text-[#FFC107] mb-2">
                  Experience
                </h5>
                <p className="text-sm text-gray-300">20+ Years in Leadership</p>
              </div>
              */}
            </div>
          </div>
        )}
      </div>
    );
  };

  const boardMembers = [
    {
      id: 1,
      name: "Daniel Ole Njooley",
      role: "Board Chairman",
      description:
        "Ex-Regional commissioner Arusha, Mwanza, Rukwa and Ex-High Commissioner to Nigeria. A distinguished leader with extensive experience in public administration and international relations, bringing strategic vision and diplomatic expertise to guide GICCS's mission.",
      image: danielOle,
    },
    {
      id: 2,
      name: "Mirjean Ackbaraly Pirbhai",
      role: "Board Secretary",
      description:
        "Experienced leader in community development and organizational management. With a strong background in administrative excellence and community engagement, ensures effective governance and operational efficiency across all GICCS initiatives.",
      image: mir,
    },
    {
      id: 3,
      name: "Muslim Mohamedtaki Remtula",
      role: "Board Treasurer",
      description:
        "Financial expert with extensive experience in resource management and fiscal oversight. Brings decades of financial management expertise, ensuring transparent and effective utilization of resources to maximize community impact.",
      image: muslim,
    },
    //{
    // id: 4,
    //name: "Dr. Neduvoto Piniel Mollel",
    //role: "Environment Projects Coordinator",
    //description:
    // "PhD in Plant Ecology and Evaluation. Works at TPRI and represents PARTS committee. Leading environmental scientist with specialized expertise in sustainable agriculture and environmental protection, driving GICCS's green initiatives.",
    // image: "/api/placeholder/300/400",
    // },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Slogan
              text="Together, We Steward Our Vision for Change."
              image={user}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1E1E20]">Board </span>
            <span className="text-[#FFC107]">Members</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders guiding our mission to transform
            communities across Tanzania through strategic governance and
            unwavering commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => {
            // Check if it's the last item and it's the 4th in a 3-column layout
            const isLastSingleCard =
              boardMembers.length % 3 === 1 &&
              index === boardMembers.length - 1;

            return (
              <div
                key={member.id}
                className={isLastSingleCard ? "lg:col-start-2" : ""}
              >
                <BoardMemberCard
                  member={member}
                  index={index}
                  isActive={activeCard === index}
                  onClick={setActiveCard}
                />
              </div>
            );
          })}
        </div>

        {/* Leadership Stats */}
        {/* <div className="mt-16 bg-[#1E1E20] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2 group-hover:scale-110 transition-transform">
                80+
              </div>
              <div className="text-white text-sm">
                Years Combined Experience
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-white text-sm">Countries Represented</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-white text-sm">Commitment to Mission</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-white text-sm">Dedicated Service</div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default BoardMembersSection;
