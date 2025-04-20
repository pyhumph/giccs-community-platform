import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGraduationCap, FaHeartbeat } from "react-icons/fa";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";

const EmpowermentShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = 3;

  const goToSlide = (slideIndex) => {
    if (slideIndex < 0) {
      setCurrentSlide(totalSlides - 1);
    } else if (slideIndex >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slideIndex);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * currentSlide;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const services = [
    {
      title: "Quality Education",
      icon: <FaGraduationCap className="text-white text-3xl" />,
      description:
        "Empowering youth and orphans through accessible education to create a brighter future for every child.",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Women Empowerment",
      icon: <MdOutlinePersonalVideo className="text-white text-3xl" />,
      description:
        "Supporting women with entrepreneurship training, financial literacy, and vocational skills to promote self-reliance and economic stability.",
      bgColor: "bg-black",
    },
    {
      title: "Healthcare Support",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      description:
        "Providing medical assistance and awareness programs to combat chronic diseases, ensuring healthier communities.",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-yellow-500 font-['Caveat'] text-xl md:text-2xl font-bold">
            Support Communities for a Better Future
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Empowering Lives Daily
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 md:text-lg">
            We provide continuous aid to communities, ensuring better
            healthcare, quality education, and sustainable solutions. Our
            mission is to uplift lives and create lasting opportunities for a
            brighter future.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="relative">
          {/* Mobile Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 rounded-full p-2 text-white md:hidden"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={24} />
          </button>

          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 rounded-full p-2 text-white md:hidden"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={24} />
          </button>

          {/* Desktop Services Grid - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* Mobile Slider - Hidden on desktop */}
          <div
            ref={sliderRef}
            className="md:hidden flex overflow-x-hidden snap-x snap-mandatory w-full"
          >
            {services.map((service, index) => (
              <div key={index} className="min-w-full px-4 snap-center">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4 md:hidden">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {/* Need Help Section */}
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <BsHeartFill className="text-white text-3xl" />
              </div>
              <p className="text-sm font-medium mb-1">
                Come And Let Us Help You
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help?
              </h3>
              <button className="border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black transition-colors py-2 px-6 rounded-full">
                Contact Now
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg flex items-center justify-center">
            <button className="bg-yellow-500 rounded-full p-4 hover:bg-yellow-600 transition-colors">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Need Support Section */}
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <BsHeartFill className="text-white text-3xl" />
              </div>
              <p className="text-sm font-medium mb-1">
                Access Life-Changing Assistance
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Support?
              </h3>
              <button className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors py-2 px-6 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="relative service-card group p-4">
      <div
        className={`rounded-full w-20 h-20 mx-auto flex items-center justify-center ${service.bgColor} mb-4`}
      >
        {service.icon}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
        <p className="text-gray-700 text-center">{service.description}</p>
      </div>

      {/* Card Border */}
      <div
        className={`absolute inset-0 border-[3px] rounded-[40px] border-transparent group-hover:border-${service.bgColor.replace("bg-", "")} transition-all duration-300`}
      ></div>
    </div>
  );
};

export default EmpowermentShowcase;
