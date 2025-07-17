// src/components/programs/health/HealthTestimonials.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testImg01 from "../../../assets/testmonial_01.png";
import testImg02 from "../../../assets/healthDonation-modified.png";
import testImg03 from "../../../assets/testmonial_02.png";
import rating from "../../../assets/rating.png";
import Slogan from "../../sub-comp/slogan";

const HealthTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "GICCS health support program has been a lifeline for our community. Their regular health screenings helped detect my kidney failure early, and they’ve been supporting my treatment ever since.",
      name: "Sharifa Hamisi",
      location: "Arusha Region",
      image: testImg01,
    },
    {
      id: 2,
      quote:
        "As a community health worker, I've seen firsthand the difference GICCS makes. They don't just provide temporary solutions – they build sustainable health knowledge in our communities.",
      name: "Emmanuel Mkwawa",
      location: "Dar es Salaam",
      image: testImg02,
    },
    {
      id: 3,
      quote:
        "My daughter has chronic asthma, and we couldn't afford her medication. GICCS stepped in when we needed help most, and now she can breathe easier and attend school regularly.",
      name: "Grace Mwakasege",
      location: "Arusha Region",
      image: testImg03,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-16 md:py-24 bg-[#1E1E20] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC107] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Slogan text="Testimonials" image={rating} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stories of Impact
          </h2>

          <p className="text-white/80 max-w-3xl mx-auto">
            Hear from those whose lives have been transformed through our health
            support programs. These testimonials reflect the real impact of our
            work in communities across Tanzania.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div
              className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
              key={testimonials[current].id}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-[#FFC107] opacity-70" />
                </div>

                <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed italic">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#FFC107]">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-white/70">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 md:-mx-8">
              <button
                onClick={prevSlide}
                className="bg-[#FFC107] text-[#1E1E20] w-10 h-10 rounded-full flex items-center justify-center transform transition-transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-[#FFC107] text-[#1E1E20] w-10 h-10 rounded-full flex items-center justify-center transform transition-transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-[#FFC107] w-8" : "bg-white/30"
                  }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTestimonials;
