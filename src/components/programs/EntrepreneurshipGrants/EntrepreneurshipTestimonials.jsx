import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import Slogan from "../../sub-comp/slogan";
import businessIcon from "../../../assets/business-strategy.png";
import woman from "../../../assets/woman (1).png";

function EntrepreneurshipTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "C.P",
      role: "Restaurant Owner",
      quote:
        "Thanks to IKWEP, I was able to expand my food business with more products and higher sales. I really appreciate the support!",
      image: woman,
      rating: 5,
    },
    {
      id: 4,
      name: "Z.D",
      role: "Professional Photographer",
      quote:
        "Thanks to IKWEPS, I was able to buy a professional camera and gear that upgraded my work quality and boosted my income. I'm truly grateful for the support!",
      image: woman,
      rating: 5,
    },
    {
      id: 5,
      name: "SpiceHub",
      role: "Spice Business Owners",
      quote:
        "We're truly grateful to IKWEPS for the grant that helped us expand SpiceHub, diversify our products, and strengthen our business. Your support made a real difference!",
      image: woman,
      rating: 5,
    },
    {
      id: 4,
      name: "Khadija R.",
      role: "Beauty Salon Owner",
      quote:
        "The grant from GICCS enabled me to purchase high-quality equipment for my salon. The business training helped me better manage my time and resources. My business has grown, and I now employ two other women from my community.",
      image: woman,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="bg-[#1E1E20] py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#FFC107]/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#FFC107]/10 translate-x-1/2 translate-y-1/2"></div>

      <SectionWrapper>
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <Slogan
              text="Empowering Women, Strengthening Communities"
              image={businessIcon}
            />
          </div>
          <h2 className="text-sm md:text-base lg:text-2xl text-[#FFC107] font-extrabold font-[Caveat] mb-3">
            TESTIMONIALS
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Success Stories from{" "}
            <span className="text-[#FFC107] flex justify-center">
              Our Beneficiaries
            </span>
          </h3>
          <p className="max-w-3xl mx-auto text-[#1E1E20]">
            Hear directly from the women whose lives and businesses have been
            transformed through our Entrepreneurship & Business Grants program.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#353537] rounded-xl p-6 md:p-8 lg:p-10 shadow-xl relative">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10">
              <svg
                className="w-12 h-12 text-[#FFC107]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="text-lg md:text-xl lg:text-2xl text-white italic mb-8">
              "{testimonials[currentIndex].quote}"
            </div>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-lg text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white">{testimonials[currentIndex].role}</p>
                <div className="flex mt-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FFC107] fill-[#FFC107]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-[#FFC107]/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-[#FFC107]/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-[#FFC107] w-5" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default EntrepreneurshipTestimonials;
