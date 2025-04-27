import { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { BsHeartFill, BsBook } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import handshake from "../../assets/support.png";
import womenImg from "../../assets/women-card.png";
import eduImg from "../../assets/education-card.png";
import healthImg from "../../assets/card-copy.png";

const EmpowermentShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);

  const services = [
    {
      title: "Quality Education",
      icon: <FaGraduationCap className="text-white text-3xl" />,
      description:
        "Empowering youth and orphans through accessible education to create a brighter future for every child.",
      bgImage: eduImg,
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
    },
    {
      title: "Women Empowerment",
      icon: <MdOutlinePersonalVideo className="text-white text-3xl" />,
      description:
        "Supporting women with training and skills for self-reliance and economic stability.",
      bgImage: womenImg,
      bgColor: "bg-black",
      borderColor: "border-black",
    },
    {
      title: "Healthcare Support",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      description:
        "Providing medical aid and programs to fight chronic diseases for healthier communities.",
      bgImage: healthImg,
      bgColor: "bg-red-600",
      borderColor: "border-red-600",
    },
    {
      title: "Literacy Programs",
      icon: <BsBook className="text-white text-3xl" />,
      description:
        "Building literacy skills in underserved communities through reading programs and educational resources.",
      bgImage: eduImg,
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      title: "Mental Health Support",
      icon: <RiMentalHealthLine className="text-white text-3xl" />,
      description:
        "Offering counseling services and mental health resources to support emotional wellbeing in vulnerable communities.",
      bgImage: healthImg,
      bgColor: "bg-green-600",
      borderColor: "border-green-600",
    },
    {
      title: "Nutrition Programs",
      icon: <GiMeal className="text-white text-3xl" />,
      description:
        "Providing nutritious meals and food education to combat hunger and promote healthy eating habits.",
      bgImage: womenImg,
      bgColor: "bg-purple-500",
      borderColor: "border-purple-500",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transition = "transform 1s ease";
      carousel.style.transform = "translateX(-33.33%)";

      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        setCurrentIndex((prevIndex) =>
          prevIndex === services.length - 1 ? 0 : prevIndex + 1,
        );
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const carousel = carouselRef.current;
    if (carousel) {
      // First prepend the last item
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? services.length - 1 : prevIndex - 1,
      );

      carousel.style.transition = "none";
      carousel.style.transform = "translateX(-33.33%)";

      setTimeout(() => {
        carousel.style.transition = "transform 1s ease";
        carousel.style.transform = "translateX(0)";
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 50);
    }
  };

  // Get visible services with a sliding window approach
  const getVisibleServices = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % services.length;
      result.push(services[index]);
    }
    return result;
  };

  // Setup auto play
  useEffect(() => {
    if (isAutoPlaying && !isHovered && !isAnimating) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, isAnimating, currentIndex]);

  // Handle hover effects
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsAutoPlaying(true);
  };

  const visibleServices = getVisibleServices();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-2">
            <img
              src={handshake}
              alt="handshake_img"
              className="w-auto h-8 mr-2"
            />
            <p className="text-[#FFC107] font-[Caveat] font-bold text-[1.5rem]">
              Support Communities for a Better Future
            </p>
          </div>
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

        {/* Services Showcase - Desktop Carousel */}
        <div
          className="relative hidden md:block overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: "translateX(0)" }}
          >
            {visibleServices.map((service, index) => (
              <div
                key={index}
                className={`w-1/3 flex-shrink-0 px-3 ${index < 3 ? "block" : "hidden md:block"}`}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Navigation Controls - Only visible on hover */}
          {isHovered && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-x-[1rem] -translate-y-1/2 bg-[#122f2a] hover:bg-[#0b201c] text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all duration-300 shadow-lg"
                disabled={isAnimating}
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 translate-x-[1rem] -translate-y-1/2 bg-[#FFC107] hover:bg-[#e6af06] text-black rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all duration-300 shadow-lg"
                disabled={isAnimating}
              >
                <FaChevronRight className="text-lg" />
              </button>
            </>
          )}
        </div>

        {/* Mobile Services Display - Scrollable without navigation */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory w-full pb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 px-4 snap-center"
            >
              <ServiceCard service={service} />
            </div>
          ))}
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
    <div className="relative service-card group p-4 h-[32rem] rounded-[40px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={service.bgImage}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.backgroundColor = "#f0f0f0";
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8 pb-4 px-4 flex flex-col items-center">
        <div
          className={`rounded-full w-22 h-22 flex items-center justify-center ${service.bgColor} mt-12 mb-4 p-6`}
        >
          <div className="transition-transform duration-500 group-hover:scale-x-[-1]">
            {service.icon}
          </div>
        </div>
        <h3 className="text-[1.3rem] font-extrabold text-[#1E1E20] text-center mt-10 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-700 text-center w-[18rem] p-1.5 font-medium tracking-wide leading-7">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default EmpowermentShowcase;
