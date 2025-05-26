import React, { useEffect, useState } from "react";
import { ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-fixed transition-all duration-500 overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        transform: `translateY(${scrollPosition * 0.2}px)` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      {/* <div className="absolute top-0 left-0 w-full">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex text-lg text-white/90 font-medium">
            <Link
              to="/"
              className="flex items-center opacity-80 hover:opacity-100 transition duration-300"
            >
              Home
              <ChevronRight className="w-4 h-4 mx-2" />
            </Link>
            <span className="flex items-center opacity-100">
              About Us
            </span>
          </nav>
        </div>
      </div> */}
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div 
          className="max-w-3xl relative z-10 transform transition-all duration-700"
          style={{ opacity: Math.max(0, 1 - scrollPosition * 0.003) }}
        >
          <div className="flex items-center mb-6">
            <Heart className="text-orange-500 mr-3 animate-pulse" />
            <h2 className="text-rose-200 font-medium tracking-wider uppercase text-sm md:text-base">Our Purpose & Passion</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Making a <span className="text-orange-400">difference</span>,<br/> one life at a time
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
            We're committed to creating lasting change through compassion, dedication, and community support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/donate" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-700 text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              to="/volunteer" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-medium text-lg transition-all duration-300 border border-white/30"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
};

export default AboutHeader;
