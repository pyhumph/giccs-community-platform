import React, { useState, useEffect } from "react";
import {
    ChevronRight,
    Leaf,
    Sun,
    Wind,
    Zap,
    Users,
    Target,
    Award,
    ArrowRight,
    Play,
    CheckCircle,
    Heart,
    DollarSign,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Star,
} from "lucide-react";

// Hero Section Component
const RenewableEnergyHeader = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Solar panels and wind turbines"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-10">
                <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFC107] rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-[#FFC107] rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#FFC107] rounded-full animate-ping delay-700"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
                <div className="animate-fade-in-up">
                    <div className="flex items-center justify-center mb-6">
                        <Leaf className="w-8 h-8 text-[#FFC107] mr-3 animate-bounce" />
                        <span className="text-[#FFC107] font-semibold text-lg tracking-wider">
                            RENEWABLE ENERGY PROGRAM
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Powering Communities with
                        <span className="text-[#FFC107] block mt-2 animate-pulse">
                            Clean Energy
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                        Join GICCS in building sustainable communities through innovative
                        renewable energy solutions that transform lives and protect our
                        planet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group bg-[#FFC107] text-[#1E1E20] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFC107]/50 flex items-center">
                            Get Involved
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center"
                        >
                            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                            Watch Story
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#FFC107] rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
            */}
        </div>
    );
};
export default RenewableEnergyHeader;
