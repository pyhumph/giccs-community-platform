import React, { useState } from "react";
import {
  Calendar,
  ArrowRight,
  Star,
  Clock,
  Eye,
  Share2,
  Download,
} from "lucide-react";

const NewsletterCard = ({ newsletter, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${featured ? "lg:col-span-2" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={newsletter.image}
          alt={newsletter.title}
          className={`w-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"
            } ${featured ? "h-64 lg:h-80" : "h-48"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        ></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {newsletter.category}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
              <Star className="w-4 h-4 mr-1" />
              Featured
            </div>
          </div>
        )}

        {/* Hover Actions */}
        <div
          className={`absolute bottom-4 right-4 flex space-x-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <button className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
            <Eye className="w-4 h-4" />
          </button>
          <button className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{newsletter.date}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{newsletter.readTime} min read</span>
          <span className="mx-2">•</span>
          <Eye className="w-4 h-4 mr-1" />
          <span>{newsletter.views} views</span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300 ${featured ? "text-xl lg:text-2xl" : "text-lg"
            }`}
        >
          {newsletter.title}
        </h3>

        {/* Preview */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {newsletter.preview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {newsletter.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs hover:bg-yellow-100 hover:text-yellow-700 transition-colors duration-300 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button className="group/btn w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
          Read Newsletter
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </article>
  );
};

export default NewsletterCard;
