import React, { useState, useEffect } from "react";
import { Calendar, Clock, Eye, User, ArrowLeft } from "lucide-react";

// Newsletter Detail Header Component
const NewsletterDetailHeader = ({ newsletter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={newsletter.image}
          alt={newsletter.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Breadcrumb Navigation */}
      {/* <div className="absolute top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <nav className="text-sm mb-4">
            <ol className="flex items-center space-x-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Newsletter
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-yellow-400">{newsletter.title}</li>
            </ol>
          </nav>*/}

      {/* Back Button */}
      {/*<button className="inline-flex items-center text-white hover:text-yellow-400 transition-colors duration-300 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Newsletter
          </button>
        </div>
      </div>*/}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4">
        <div
          className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg shadow-lg">
              {newsletter.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {newsletter.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{newsletter.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{newsletter.readTime} min read</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              <span>{newsletter.views} views</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>GICCS Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetailHeader;
