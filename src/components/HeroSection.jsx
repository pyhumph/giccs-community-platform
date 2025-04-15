import { useState, useEffect } from "react";
import { ArrowRight, HandshakeIcon } from "lucide-react";
import bg01 from "../assets/armando-fera-i8IeYLEZ7hE-unsplash.jpg";
import bg02 from "../assets/michael-ali-Xo27J9RUjK8-unsplash.jpg";
import bg03 from "../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg";
import handshake from "../assets/support.png";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [bg01, bg02, bg03];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Background with Zoom Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-6000 ease-out ${index === currentSlide ? "scale-110" : "scale-100"
                }`}
            />
          </div>
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E20] to-transparent"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-[-12rem] px-4 md:px-8 z-10">
        {/* Small Heading with Handshake Icon */}
        <div className="flex items-center mb-2">
          {/*<HandshakeIcon className="w-5 h-5 mr-2 text-[#FFC107]" />*/}
          <img
            src={handshake}
            alt="handshake_img"
            className="w-auto h-8 mr-2"
          />
          <p
            className="text-[#FFC107] font-bold text-[1.5rem]"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            Support Communities for a Better Future
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-[5rem] font-bold text-white max-w-6xl mb-6">
          <span className="block">Bring Hope and Aid to </span>
          <span
            className="text-[#FFC107] relative mr-4"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            Tanzanian
            <svg
              className="absolute w-full h-3 -bottom-2 left-0"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 C30,15 70,-5 100,5"
                stroke="#FFC107"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </span>
          in Need
        </h1>

        {/* Paragraph */}
        <p className="text-white text-sm md:text-base max-w-3xl mb-8">
          For years, GICCS has been empowering communities and transforming
          lives—and we're just getting started. Through our dedicated efforts,
          we strive to enhance the quality of life for those in need. Every
          resource we receive is directly channeled into impactful programs that
          create lasting change.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300 rounded">
            <ArrowRight className="w-5 h-5 mr-2" />
            Learn More
          </button>
          <button className="px-6 py-3 bg-[#FFC107] text-black hover:bg-opacity-90 transition duration-300 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
