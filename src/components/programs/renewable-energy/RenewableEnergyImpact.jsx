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
const RenewableEnergyImpact = () => {
    const [counters, setCounters] = useState({
        communities: 0,
        homes: 0,
        co2: 0,
        jobs: 0,
    });

    const targetValues = {
        communities: 150,
        homes: 2500,
        co2: 1800,
        jobs: 450,
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        const intervals = Object.keys(targetValues).map((key) => {
            const target = targetValues[key];
            const increment = target / steps;
            let current = 0;

            return setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(
                        intervals.find(
                            (i) => i === intervals[Object.keys(targetValues).indexOf(key)],
                        ),
                    );
                }
                setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
            }, stepDuration);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    const stats = [
        {
            number: counters.communities,
            suffix: "+",
            label: "Communities Served",
            icon: <Users className="w-8 h-8" />,
            description:
                "Rural and urban communities now have access to clean energy",
        },
        {
            number: counters.homes,
            suffix: "+",
            label: "Homes Powered",
            icon: <Sun className="w-8 h-8" />,
            description: "Families enjoying reliable, affordable renewable energy",
        },
        {
            number: counters.co2,
            suffix: "T",
            label: "CO₂ Reduced",
            icon: <Leaf className="w-8 h-8" />,
            description: "Tons of carbon emissions prevented annually",
        },
        {
            number: counters.jobs,
            suffix: "+",
            label: "Jobs Created",
            icon: <Award className="w-8 h-8" />,
            description: "Local employment opportunities in renewable energy sector",
        },
    ];

    return (
        <section className="py-20 bg-[#1E1E20] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 border border-[#FFC107] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FFC107] rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#FFC107] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Impact in
                        <span className="text-[#FFC107] block">Numbers</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Measurable change that's transforming communities and protecting our
                        environment
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#FFC107]/50 transform hover:scale-105 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-[#FFC107]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#1E1E20] transition-all duration-300">
                                {stat.icon}
                            </div>

                            <div className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-2">
                                {stat.number}
                                {stat.suffix}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {stat.label}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RenewableEnergyImpact;
