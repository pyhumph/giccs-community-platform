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
const RenewableEnergyDonate = () => {
    const [donationAmount, setDonationAmount] = useState(50);

    const impactLevels = [
        { amount: 25, impact: "Powers a home for 1 week" },
        { amount: 50, impact: "Solar panel for a school classroom" },
        { amount: 100, impact: "Training for 5 community members" },
        { amount: 250, impact: "Complete solar kit for a family" },
        { amount: 500, impact: "Wind turbine for a rural clinic" },
        { amount: 1000, impact: "Community energy storage system" },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#FFC107]/10 to-[#FFC107]/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E20] mb-6">
                            Power Change with
                            <span className="text-[#FFC107] block">Your Donation</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Every contribution brings us closer to a world powered by clean,
                            renewable energy. Your support directly impacts communities in
                            need of sustainable energy solutions.
                        </p>

                        <div className="space-y-4 mb-8">
                            {impactLevels.map((level, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${donationAmount === level.amount
                                            ? "border-[#FFC107] bg-[#FFC107]/10"
                                            : "border-gray-200 hover:border-[#FFC107]/50"
                                        }`}
                                    onClick={() => setDonationAmount(level.amount)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-[#1E1E20] text-lg">
                                            ${level.amount}
                                        </span>
                                        <span className="text-gray-600">{level.impact}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-[#FFC107] text-[#1E1E20] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                                <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                Donate ${donationAmount}
                            </button>

                            <button className="bg-transparent border-2 border-[#FFC107] text-[#FFC107] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC107] hover:text-[#1E1E20] transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-[#1E1E20] mb-6">
                                Quick Donation
                            </h3>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[25, 50, 100].map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => setDonationAmount(amount)}
                                        className={`p-3 rounded-xl font-semibold transition-all duration-300 ${donationAmount === amount
                                                ? "bg-[#FFC107] text-[#1E1E20]"
                                                : "bg-gray-100 text-gray-600 hover:bg-[#FFC107]/20"
                                            }`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-6">
                                <input
                                    type="number"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-2xl font-bold text-center focus:border-[#FFC107] focus:outline-none transition-colors"
                                    placeholder="Enter amount"
                                />
                            </div>

                            <button className="w-full bg-[#FFC107] text-[#1E1E20] py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                                <DollarSign className="mr-2 w-5 h-5" />
                                Donate Now
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-4">
                                Secure payment • Tax deductible • Monthly options available
                            </p>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FFC107] rounded-full animate-bounce opacity-80"></div>
                        <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#FFC107] rounded-full animate-pulse opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenewableEnergyDonate;
