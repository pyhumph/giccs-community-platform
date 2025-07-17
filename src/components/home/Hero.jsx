import { useState, useEffect } from "react";
import { ArrowRight, HandshakeIcon, ArrowUpRight } from "lucide-react";
import bg01 from "../../assets/armando-fera-i8IeYLEZ7hE-unsplash.jpg";
import bg02 from "../../assets/michael-ali-Xo27J9RUjK8-unsplash.jpg";
import bg03 from "../../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg";
import handshake from "../../assets/support.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const slides = [bg01, bg02, bg03];
  const fullText = "Bringing Hope and Aid to Tanzaniansin Need";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Text animation effect - runs only once on component load
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 80); // Adjust speed of typing here

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Background with Zoom Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-full overflow-hidden">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-5000 ease-out ${
                index === currentSlide ? "scale-110" : "scale-70"
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
          <img
            src={handshake}
            alt="handshake_img"
            className="w-auto h-8 mr-2"
          />
          <p className="text-[#FFC107] font-[Caveat] font-bold text-[1.5rem]">
            Support Communities for a Better Future
          </p>
        </div>

        {/* Main Heading with Animation */}
        <h1 className="text-4xl md:text-[5.5rem] font-[750] text-white max-w-6xl mb-4">
          <span className="block">
            {displayText.includes("Bringing")
              ? displayText.substring(
                  0,
                  displayText.indexOf("Tanzanians") !== -1
                    ? displayText.indexOf("Tanzanians")
                    : displayText.length,
                )
              : ""}
          </span>
          {displayText.includes("Tanzanians") && (
            <>
              <span className="text-[#FFC107] relative mr-4">
                {displayText.substring(
                  displayText.indexOf("Tanzanians"),
                  displayText.indexOf("Tanzanians") + "Tanzanians".length,
                )}
              </span>
              {displayText.substring(
                displayText.indexOf("Tanzanians") + "Tanzanians".length,
              )}
            </>
          )}
        </h1>

        {/* Paragraph */}
        <p className="text-white text-sm md:text-base max-w-3xl mb-8">
          For years, GICCS has been empowering communities and transforming
          lives—and we're just getting started. Through our dedicated efforts,
          we strive to enhance the quality of life for those in need.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Learn More Button */}
          {/*<button className="hover:scale-105 transition-transform bg-[#C2B3B3]/45 text-white cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative group overflow-hidden duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem]">
            <span className="absolute inset-0 bg-[#FFC107] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
              <span className="group-hover:text-black transition-colors duration-300">
                Learn More
              </span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-black" />
            </div>
          </button>*/}

          {/* Apply Now Button */}
          {/*<button className="hover:scale-105 bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem]">
            <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
              <span className="group-hover:text-white transition-colors duration-300">
                Apply Now
              </span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
            </div>
          </button>*/}
        </div>
      </div>
    </div>
  );
}
