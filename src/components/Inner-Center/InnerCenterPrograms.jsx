import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Users,
  Leaf,
  Star,
  Brain,
  Shield,
  Zap,
  Activity,
} from "lucide-react";

const InnerCenterPrograms = () => {
  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Counseling & Therapy Sessions",
      description:
        "Professional mental health support with certified therapists for emotional wellness and personal growth",
      category: "wellness",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Stress Management Workshops",
      description:
        "Learn evidence-based techniques to manage daily stress and build resilience in challenging times",
      category: "wellness",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Business Training",
      description:
        "Comprehensive entrepreneurial skills development to grow your business and achieve financial independence",
      category: "business",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Waste Management Training",
      description:
        "Environmental sustainability education focusing on waste reduction and eco-friendly practices",
      category: "environment",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Digital & Financial Literacy",
      description:
        "Essential modern life skills including digital technology and financial management education",
      category: "education",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Meditation & Development",
      description:
        "Personal growth through mindfulness practices, meditation techniques, and spiritual development",
      category: "wellness",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Health & Hygiene Education",
      description:
        "Community wellness programs focusing on preventive healthcare and hygiene best practices",
      category: "health",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Chronic Disease Management",
      description:
        "Comprehensive support and education for managing chronic health conditions effectively",
      category: "health",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ];

  const categories = [
    { id: "all", name: "All Programs", count: programs.length },
    {
      id: "wellness",
      name: "Wellness",
      count: programs.filter((p) => p.category === "wellness").length,
    },
    {
      id: "health",
      name: "Health",
      count: programs.filter((p) => p.category === "health").length,
    },
    {
      id: "business",
      name: "Business",
      count: programs.filter((p) => p.category === "business").length,
    },
    {
      id: "education",
      name: "Education",
      count: programs.filter((p) => p.category === "education").length,
    },
    {
      id: "environment",
      name: "Environment",
      count: programs.filter((p) => p.category === "environment").length,
    },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400 opacity-5 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">
              Community Programs
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Transformative Programs for
            <span className="block text-yellow-500 relative">
              Every Journey
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse range of programs designed to support{" "}
            <span className="text-yellow-600 font-semibold">
              community wellness
            </span>
            , education, and empowerment for people of all backgrounds and ages.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-12 transform transition-all duration-1000 delay-300 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-yellow-400 text-gray-800 shadow-lg shadow-yellow-400/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={index}
              className={`group ${program.bgColor} ${program.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                {program.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-800 mb-4 text-lg leading-tight group-hover:text-gray-900 transition-colors duration-300">
                {program.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {program.description}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <button
                  className={`text-sm font-semibold bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </button>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-yellow-400/10 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always expanding our programs based on community needs. Let
              us know what you'd like to see!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
                Suggest a Program
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerCenterPrograms;
