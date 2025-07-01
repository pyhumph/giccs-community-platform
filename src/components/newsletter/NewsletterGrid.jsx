import React from "react";
import NewsletterCard from "./NewsletterCard";
import waterImg from "../../assets/water-initiative.jpg";
const NewsletterGrid = ({ activeFilter, searchTerm }) => {
  const newsletters = [
    {
      id: 1,
      title: "Year of Transformation: Our 2024 Impact Report",
      date: "December 15, 2024",
      category: "Impact Stories",
      readTime: 8,
      views: 1245,
      preview:
        "Discover how your support transformed thousands of lives this year. From education breakthroughs to healthcare innovations, see the incredible impact we've made together in communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["impact", "annual-report", "2024"],
      featured: true,
    },
    {
      id: 2,
      title: "New Educational Centers Opening Across Rural Communities",
      date: "November 28, 2024",
      category: "Program Updates",
      readTime: 5,
      views: 892,
      preview:
        "Exciting news as we inaugurate five new educational centers, bringing quality learning opportunities directly to underserved rural communities.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["education", "rural-development", "expansion"],
    },
    {
      id: 3,
      title: "Healthcare Heroes: Meet Our Volunteer Medical Team",
      date: "November 20, 2024",
      category: "Community News",
      readTime: 6,
      views: 654,
      preview:
        "Get to know the dedicated healthcare professionals who volunteer their time and expertise to provide medical care in remote areas.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["healthcare", "volunteers", "heroes"],
    },
    {
      id: 4,
      title: "Entrepreneurship Program Graduates 200+ Small Business Owners",
      date: "November 10, 2024",
      category: "Impact Stories",
      readTime: 7,
      views: 1023,
      preview:
        "Celebrating the success of our entrepreneurship program as over 200 participants graduate and launch their own sustainable businesses.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["entrepreneurship", "graduation", "success-stories"],
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
    {
      id: 6,
      title: "Volunteer Spotlight: Sarah's Journey of Service",
      date: "October 15, 2024",
      category: "Community News",
      readTime: 5,
      views: 456,
      preview:
        "Meet Sarah Johnson, whose dedication to our cause has touched countless lives. Learn about her inspiring journey and impact.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["volunteer-spotlight", "inspiration", "service"],
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
