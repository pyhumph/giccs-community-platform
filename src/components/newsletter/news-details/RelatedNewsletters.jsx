import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
const RelatedNewsletters = ({ currentNewsletter }) => {
  const relatedNewsletters = [
    {
      id: 2,
      title: "New Educational Centers Opening Across Rural Communities",
      date: "November 28, 2024",
      category: "Program Updates",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: 5,
    },
    {
      id: 3,
      title: "Healthcare Heroes: Meet Our Volunteer Medical Team",
      date: "November 20, 2024",
      category: "Community News",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: 6,
    },
    {
      id: 4,
      title: "Entrepreneurship Program Graduates 200+ Small Business Owners",
      date: "November 10, 2024",
      category: "Impact Stories",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: 7,
    },
  ].filter((newsletter) => newsletter.id !== currentNewsletter.id);

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Newsletters
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedNewsletters.map((newsletter) => (
          <article
            key={newsletter.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {newsletter.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{newsletter.date}</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{newsletter.readTime} min read</span>
              </div>

              <h3 className="font-bold text-gray-900 mb-4 hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                {newsletter.title}
              </h3>

              <button className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center transition-colors duration-300">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedNewsletters;
