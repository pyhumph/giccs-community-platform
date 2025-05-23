import React from "react";
import { ArrowRight, Play, FileText } from "lucide-react";
import innerCenterbg from "../../assets/inner-center-bg.jpg";

const InnerCenterHero = ({ onShowAgreement }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={innerCenterbg}
          alt="Inner Center Yoga Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-yellow-900 opacity-40"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-20 backdrop-blur-sm border border-yellow-400 border-opacity-30 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-[#1E1E20] font-medium text-sm sm:text-base">
            Holistic Wellness & Community Empowerment
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
          Inner{" "}
          <span className="text-yellow-400 relative">
            Center
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          A sanctuary for{" "}
          <span className="text-yellow-400 font-semibold">
            holistic well-being
          </span>
          , yoga practice, and{" "}
          <span className="text-yellow-400 font-semibold">
            community empowerment
          </span>
          . Join our free programs designed to uplift and transform lives.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={onShowAgreement}
            className="group bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 flex items-center gap-3"
          >
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View Usage Agreement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <a
            href="#programs"
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Explore Programs
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <div className="text-gray-300 font-medium">Community Members</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-gray-300 font-medium">Weekly Programs</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-gray-300 font-medium">Years of Service</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default InnerCenterHero;
