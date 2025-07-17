import React, { useState, useEffect } from "react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import Slogan from "../../sub-comp/slogan";
import eduIcon from "../../../assets/education_04.png";
import student from "../../../assets/student.png";

function EducationTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "S.S",
      role: "ACCA Qualification",
      image: student,
      content:
        "I am incredibly grateful for the support I’ve received in pursuing my ACCA qualification. This opportunity has not only helped me grow academically, but it has also brought me closer to achieving my dream of becoming a professional accountant.Thanks to your generosity, I’ve been able to fully focus on my studies. Your support has made a real difference in my journey, and I hope many more students can benefit from the same.",
      video: null,
    },
    {
      id: 2,
      name: "F.R",
      role: "Masters Graduate",
      image: student,
      content:
        "I am deeply grateful to MIDAS/ GICCS for their generous sponsorship and unwavering support throughout my Master’s journey. This opportunity not only allowed me to pursue specialized training in Internal Medicine, but it also empowered me to grow both professionally and personally. The knowledge and skills I’ve acquired are now helping me serve my community with greater confidence and compassion.This support has been life-changing—not just for me, but for every patient I now have the privilege to care for. I sincerely thank you for believing in my potential. Your investment in education is planting seeds of hope and progress, and I pray that many more aspiring students are granted the same chance to rise and make a difference.",
      video: null,
    },
    {
      id: 3,
      name: "Zahra M.",
      role: "Business Administration Student",
      image: student,
      content:
        "The education support program changed my life trajectory. Coming from an underserved community, I never thought I would get a chance at higher education. Now I'm close to graduating and already have job offers.",
      video: null,
    },
    {
      id: 4,
      name: "Ali R.",
      role: "IT Diploma Graduate",
      image: student,
      content:
        "Through the partnership with JRIIT, I was able to complete my IT diploma. The skills I gained have helped me secure a good job, and I'm even thinking of starting my own tech company to create jobs for others in my community.",
      video: null,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <SectionWrapper>
      <div className="bg-[#1E1E20] py-16 md:py-20 lg:py-24 text-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="flex justify-center">
              <Slogan text="Our Student Voice" image={eduIcon} />
            </div>
            {/*<span className="inline-block py-1 px-3 bg-[#FFC107]/20 text-[#FFC107] font-medium rounded-full text-sm mb-4">
                            Student Voices
                        </span>
                        */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hear From Our Students
            </h2>
            <p className="text-gray-300 text-lg">
              Our students share their experiences and how the education support
              program has impacted their lives.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full">
                    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl">
                      {testimonial.video ? (
                        <div className="mb-6 aspect-video rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-16 w-16 text-[#FFC107]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      ) : null}

                      <p className="text-gray-200 italic mb-6 text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full bg-gray-400 mr-4 overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-[#FFC107]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#FFC107] w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFC107] text-[#1E1E20] flex items-center justify-center hover:bg-[#e0a800] transition-colors duration-300 shadow-lg"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + testimonials.length) % testimonials.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFC107] text-[#1E1E20] flex items-center justify-center hover:bg-[#e0a800] transition-colors duration-300 shadow-lg"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % testimonials.length)
              }
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EducationTestimonials;
