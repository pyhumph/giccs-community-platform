import React from "react";
import { Search } from "lucide-react";
const NewsletterFilters = ({
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
}) => {
  const filters = [
    { id: "all", label: "All Issues", count: 24 },
    { id: "latest", label: "Latest", count: 6 },
    { id: "impact", label: "Impact Stories", count: 8 },
    { id: "updates", label: "Program Updates", count: 7 },
    { id: "community", label: "Community News", count: 3 },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search newsletters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === filter.id
                    ? "bg-yellow-400 text-gray-900 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {filter.label}
                <span className="ml-2 text-xs opacity-75">
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterFilters;
