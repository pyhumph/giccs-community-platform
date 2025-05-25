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
const RenewableEnergyIntro = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E20] mb-6 leading-tight">
                                Transforming Lives Through
                                <span className="text-[#FFC107] block">Renewable Energy</span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our Renewable Energy Program is at the forefront of sustainable
                                development, bringing clean, affordable energy solutions to
                                underserved communities. We believe that access to renewable
                                energy is not just an environmental necessity, but a fundamental
                                right that can break the cycle of poverty and create lasting
                                change.
                            </p>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Through innovative partnerships and cutting-edge technology,
                                we're building a future powered by the sun, wind, and water -
                                creating jobs, improving health outcomes, and protecting our
                                planet for future generations.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC107]/20 transition-colors">
                                    <Sun className="w-8 h-8 text-[#FFC107]" />
                                </div>
                                <h3 className="font-bold text-[#1E1E20] text-xl">
                                    Solar Power
                                </h3>
                                <p className="text-sm text-gray-600">Clean & Efficient</p>
                            </div>

                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC107]/20 transition-colors">
                                    <Wind className="w-8 h-8 text-[#FFC107]" />
                                </div>
                                <h3 className="font-bold text-[#1E1E20] text-xl">
                                    Wind Energy
                                </h3>
                                <p className="text-sm text-gray-600">Sustainable Future</p>
                            </div>

                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC107]/20 transition-colors">
                                    <Zap className="w-8 h-8 text-[#FFC107]" />
                                </div>
                                <h3 className="font-bold text-[#1E1E20] text-xl">Smart Grid</h3>
                                <p className="text-sm text-gray-600">Advanced Tech</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Community solar installation"
                                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Floating Stats Cards */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl animate-float">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#FFC107] mb-1">
                                    500+
                                </div>
                                <div className="text-sm text-gray-600">Homes Powered</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl animate-float delay-300">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#FFC107] mb-1">
                                    85%
                                </div>
                                <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenewableEnergyIntro;
