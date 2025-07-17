import React from "react";
import NewsletterCard from "./NewsletterCard";
import waterImg from "../../assets/water-initiative.jpg";
import newz01 from "../../assets/ikwep.png";
import newz02 from "../../assets/jr_institute_of_information_technology_9.jpg";
import newz03 from "../../assets/MussaKassam.jpg";
import newz04 from "../../assets/healthDonation.jpg";
const NewsletterGrid = ({ activeFilter, searchTerm }) => {
  const newsletters = [
    {
      id: 1,
      title: "Empowering Women Entrepreneurs: 2025 Business Grant Highlights",
      date: "July 17, 2025",
      category: "Program Highlights",
      readTime: 5,
      views: 1245,
      preview:
        "Discover how GICCS is transforming lives through our women-only business grant program — providing funding, mentorship, and tools to help female entrepreneurs grow and thrive.",
      image: newz01,
      tags: ["women", "entrepreneurship", "2025", "grants"],
      featured: true,
    },

    {
      id: 2,
      title:
        "Celebrating Our 2025 Graduates: 20+ Students Set to Complete Their Journey",
      date: "July 17, 2025",
      category: "Program Updates",
      readTime: 4,
      views: 892,
      preview:
        "This October, over 20 students sponsored by GICCS are set to graduate — a powerful milestone in their academic and personal journeys, made possible through your support.",
      image: newz02,
      tags: ["education", "graduation", "student-success", "2025"],
    },

    {
      id: 3,
      title: "Scholarship Opportunities: Supporting Students in Need",
      date: "July 17, 2025",
      category: "Community News",
      readTime: 4,
      views: 654,
      preview:
        "We are currently offering scholarships to children who wish to continue their education but lack the financial means. The window is open — apply now or help spread the word.",
      image: newz03,
      tags: ["education", "scholarships", "student-support", "2025"],
    },

    {
      id: 5,
      title: "Chronic Illness Support Initiative Reaches 50+ Community Members",
      date: "July 10, 2025",
      category: "Health Support",
      readTime: 6,
      views: 875,
      preview:
        "Our ongoing health support initiative is making a difference in the lives of individuals living with chronic illnesses such as diabetes and hypertension.",
      image: newz04,
      tags: ["health", "chronic-illness", "community-support"],
    },

    {
      id: 5,
      title: "Clean Water Initiative Reaches 50,000 People",
      date: "October 25, 2024",
      category: "Program Updates",
      readTime: 4,
      views: 743,
      preview:
        "A major milestone as our clean water initiative successfully provides safe drinking water access to over 50,000 community members.",
      image: waterImg,
      tags: ["clean-water", "milestone", "community-health"],
    },
  ];

  // Filter newsletters based on active filter and search term
  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "latest" && newsletter.id <= 6) ||
      (activeFilter === "impact" && newsletter.category === "Impact Stories") ||
      (activeFilter === "updates" &&
        newsletter.category === "Program Updates") ||
      (activeFilter === "community" &&
        newsletter.category === "Community News");

    const matchesSearch =
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {filteredNewsletters.map((newsletter, index) => (
          <NewsletterCard
            key={newsletter.id}
            newsletter={newsletter}
            featured={index === 0}
          />
        ))}
      </div>

      {/* Load More Button */}
      {/*<div className="text-center mt-12">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Load More Newsletters
        </button>
      </div>
      */}
    </div>
  );
};
export default NewsletterGrid;
