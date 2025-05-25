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

const RenewableEnergyTestimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Maria Santos",
            role: "Community Leader",
            location: "Rural Philippines",
            content:
                "GICCS transformed our village with solar panels. Our children can now study at night, and our local businesses can operate longer hours. It's changed everything for us.",
            image:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
        },
        {
            name: "John Kimani",
            role: "Local Entrepreneur",
            location: "Kenya",
            content:
                "The renewable energy training program gave me the skills to start my own solar installation business. Now I'm providing clean energy solutions to my community.",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
        },
        {
            name: "Ana Rodriguez",
            role: "School Principal",
            location: "Guatemala",
            content:
                "Our school now has reliable electricity thanks to GICCS. We can use computers, projectors, and our students have access to online learning resources.",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E20] mb-6">
                        Stories of
                        <span className="text-[#FFC107] block">Transformation</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear directly from the communities whose lives have been changed by
                        renewable energy
                    </p>
                </div>

                <div className="relative">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <img
                                    src={testimonials[activeTestimonial].image}
                                    alt={testimonials[activeTestimonial].name}
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-[#FFC107] rounded-2xl p-6 shadow-xl">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(testimonials[activeTestimonial].rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 text-white fill-current"
                                                />
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-6xl text-[#FFC107] font-serif leading-none">
                                    "
                                </div>

                                <p className="text-xl text-gray-700 leading-relaxed italic">
                                    {testimonials[activeTestimonial].content}
                                </p>

                                <div>
                                    <h4 className="text-2xl font-bold text-[#1E1E20] mb-1">
                                        {testimonials[activeTestimonial].name}
                                    </h4>
                                    <p className="text-[#FFC107] font-semibold">
                                        {testimonials[activeTestimonial].role}
                                    </p>
                                    <p className="text-gray-600 flex items-center mt-2">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {testimonials[activeTestimonial].location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-[#FFC107]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenewableEnergyTestimonials;
