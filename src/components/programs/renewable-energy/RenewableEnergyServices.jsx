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
const RenewableEnergyServices = () => {
    const services = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Solar Panel Installation",
            description:
                "Professional installation of high-efficiency solar panels for homes, schools, and community centers.",
            features: [
                "Free assessment",
                "Professional installation",
                "Maintenance support",
                "Energy monitoring",
            ],
        },
        {
            icon: <Wind className="w-8 h-8" />,
            title: "Wind Energy Solutions",
            description:
                "Small-scale wind turbines perfect for rural communities and off-grid locations.",
            features: [
                "Site evaluation",
                "Custom solutions",
                "Grid integration",
                "Long-term support",
            ],
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Energy Storage Systems",
            description:
                "Advanced battery systems to store renewable energy for consistent power supply.",
            features: [
                "24/7 power backup",
                "Smart management",
                "Scalable solutions",
                "Remote monitoring",
            ],
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Training",
            description:
                "Comprehensive training programs to build local capacity for renewable energy maintenance.",
            features: [
                "Technical training",
                "Job creation",
                "Certification programs",
                "Ongoing support",
            ],
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E20] mb-6">
                        Our Renewable Energy
                        <span className="text-[#FFC107] block">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions designed to meet the unique energy needs of
                        communities worldwide
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border hover:border-[#FFC107]/30"
                        >
                            <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC107] group-hover:text-white transition-all duration-300 text-[#FFC107]">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#1E1E20] mb-4 group-hover:text-[#FFC107] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center text-sm text-gray-600"
                                    >
                                        <CheckCircle className="w-4 h-4 text-[#FFC107] mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default RenewableEnergyServices;
