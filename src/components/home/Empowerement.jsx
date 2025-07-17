import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import video from "../../assets/VID-20250508-WA0000.mp4";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
  FaSolarPanel,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaGift,
} from "react-icons/fa";
import { BsHeartFill, BsBook } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Slogan from "../sub-comp/slogan";
import womenImg from "../../assets/women-card.png";
import eduImg from "../../assets/education-card.png";
import healthImg from "../../assets/card-copy.png";
import womenPower from "../../assets/strong (1).png";
import CTAImg from "../../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg";
import VolunteerImg from "../../assets/khalil-radi-BlzrvWb1_vQ-unsplash.jpg";
import DonationImg from "../../assets/larm-rmah-AEaTUnvneik-unsplash.jpg";
import CTAButton from "../sub-comp/Button";

const EmpowermentShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

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
      icon: <img src={womenPower} className="text-white text-3xl" />,
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
      title: "Clean Energy Initiatives",
      icon: <FaSolarPanel className="text-white text-3xl" />,
      description:
        "Promoting clean energy access and sustainable solutions for underserved communities.",
      bgImage: womenImg,
      bgColor: "bg-purple-500",
      borderColor: "border-purple-500",
    },
    /*{
      title: "Entrepreneurship",
      icon: <FaLightbulb className="text-white text-3xl" />,
      description:
        "Empowering individuals with skills and resources to launch successful small businesses.",
      bgImage: womenImg,
      bgColor: "bg-indigo-500",
      borderColor: "border-indigo-500",
    },
    */
    {
      title: "Startup Business Grants",
      icon: <FaMoneyCheckAlt className="text-white text-3xl" />,
      description:
        "Providing financial support to fuel startups and boost local economic growth.",
      bgImage: womenImg,
      bgColor: "bg-green-600",
      borderColor: "border-green-500",
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

  // Start the pulse animation for the play button
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Video functions
  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    // Reset YouTube iframe if needed
    if (videoRef.current) {
      const iframeSrc = videoRef.current.src;
      videoRef.current.src = iframeSrc;
    }
  };

  const visibleServices = getVisibleServices();

  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center">
            <Slogan />
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

        {/* Call to Action Section */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Become a Volunteer */}
            <div className="relative flex flex-col justify-center items-center text-center text-white py-16 px-6 overflow-hidden">
              {/* Background Image with Grayscale */}
              <img
                src={VolunteerImg}
                alt="Volunteer Background"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              {/* Dark Overlay + Right Side Gradient */}
              <div
                className="absolute inset-0 bg-opacity-50"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.75), rgba(17,24,39,0.6))",
                }}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <BsHeartFill className="text-white text-6xl" />
                </div>
                <p className="text-sm mb-2">
                  We Give Child A Gift Of A Education
                </p>
                <h3 className="text-4xl font-bold mb-6">Become A Volunteer?</h3>
                <Link to={`/contact`}>
                  <CTAButton
                    text="Contact Now"
                    bgColor="#00715d"
                    textColor="white"
                    hoverBgColor="#FFC107"
                    hoverTextColor="#1E1E20"
                  />
                </Link>
              </div>
            </div>

            {/* Play Video Section */}
            <div className="relative flex items-center justify-center bg-gray-200 overflow-hidden">
              {/* Center Gray Image Placeholder */}
              <img
                src={CTAImg}
                alt="Center CTA"
                className="w-full h-full object-cover grayscale"
              />

              {/* Torn Paper Effect Left Side */}
              <div className="absolute top-0 bottom-0 left-0 w-12 z-10">
                <svg
                  viewBox="0 0 100 1000"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                >
                  <path
                    d="M100,0 Q70,50 80,100 Q60,150 75,200 Q50,250 70,300 Q80,350 60,400 Q70,450 50,500 Q80,550 70,600 Q50,650 80,700 Q70,750 50,800 Q60,850 80,900 Q70,950 100,1000 L0,1000 L0,0 Z"
                    fill="#facc15"
                  />
                </svg>
              </div>

              {/* Yellow Play Button with Animation */}
              <button
                onClick={openVideo}
                className={`absolute bg-yellow-500 hover:bg-yellow-600 p-6 rounded-full z-20 transition-all duration-300 ${
                  pulseAnimation ? "animate-pulse scale-110" : ""
                }`}
              >
                <svg
                  className="w-8 h-8 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Pulse Animation Elements */}
              <div
                className={`absolute w-20 h-20 rounded-full bg-yellow-500 opacity-50 transition-all duration-700 ${
                  pulseAnimation ? "scale-150 opacity-0" : "scale-100 opacity-0"
                }`}
              ></div>
              <div
                className={`absolute w-20 h-20 rounded-full bg-yellow-500 opacity-25 transition-all duration-1000 delay-100 ${
                  pulseAnimation ? "scale-150 opacity-0" : "scale-100 opacity-0"
                }`}
              ></div>
            </div>

            {/* Make Donation */}
            <div className="relative flex flex-col justify-center items-center text-center text-white py-16 px-6 overflow-hidden">
              {/* Background Image with Grayscale */}
              <img
                src={DonationImg}
                alt="Donation Background"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              {/* Dark Overlay + Left Side Gradient */}
              <div
                className="absolute inset-0 bg-opacity-50"
                style={{
                  background:
                    "linear-gradient(to left, rgba(6,78,59,0.75), rgba(16,185,129,0.6))",
                }}
              ></div>
              {/* Torn Paper Effect Left Side */}
              <div className="absolute top-0 bottom-0 left-0 w-12 z-10">
                <svg
                  viewBox="0 0 100 1000"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                >
                  <path
                    d="M100,0 Q70,50 80,100 Q60,150 75,200 Q50,250 70,300 Q80,350 60,400 Q70,450 50,500 Q80,550 70,600 Q50,650 80,700 Q70,750 50,800 Q60,850 80,900 Q70,950 100,1000 L0,1000 L0,0 Z"
                    fill="#facc15"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <FaGift className="text-white text-6xl" />
                </div>
                <p className="text-sm mb-2">
                  We Give Child A Gift Of A Education
                </p>
                <h3 className="text-4xl font-bold mb-6">
                  Make Donation To Us?
                </h3>
                <Link to={`/donate`}>
                  <CTAButton text="Donate Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={closeVideo}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-black rounded-lg w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <IoMdClose className="w-8 h-8" />
            </button>

            {/* Video Player */}

            <div className="aspect-w-16 aspect-h-9">
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
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
          className={`rounded-full w-22 h-22 flex items-center justify-center ${service.bgColor} mt-12 mb-4 p-6  transition-transform duration-500 group-hover:scale-x-[-1]`}
        >
          <div className="transition-transform duration-500 group-hover:scale-x-[1]">
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
