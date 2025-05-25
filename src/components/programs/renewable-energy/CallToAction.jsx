import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
const CallToAction = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#FFC107] to-yellow-300 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute top-32 right-20 w-12 h-12 bg-white/20 rounded-full animate-float delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/20 rounded-full animate-float delay-700"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-[#1E1E20] mb-6">
                    Be the Change Our
                    <span className="block">Planet Needs</span>
                </h2>

                <p className="text-xl md:text-2xl text-[#1E1E20]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Every action counts. Join thousands of others who are already making a
                    difference in communities worldwide through renewable energy.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group bg-[#1E1E20] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center">
                        Start Your Impact
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="group bg-white/20 backdrop-blur-sm border-2 border-[#1E1E20]/30 text-[#1E1E20] px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center">
                        <Calendar className="mr-3 w-6 h-6" />
                        Schedule a Call
                    </button>
                </div>

                <p className="text-[#1E1E20]/60 mt-6 text-sm">
                    Join 50,000+ supporters • 100% secure • Cancel anytime
                </p>
            </div>
        </section>
    );
};
export default CallToAction;
