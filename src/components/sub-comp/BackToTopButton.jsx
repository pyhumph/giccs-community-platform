import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const scrolled = window.scrollY > 10;
      setIsVisible(scrolled);

      // Calculate scroll progress for the fill animation
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / scrollHeight;
      setScrollProgress(currentProgress * 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={scrollToTop}
        className="relative h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border-6 border-amber-400 border-opacity-70 hover:shadow-xl transition-all cursor-pointer"
        aria-label="Scroll to top"
      >
        {/* Circular progress indicator */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#FFC107"
            strokeWidth="3"
            strokeOpacity="0.2"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#00715d"
            strokeWidth="5"
            strokeDasharray="276.5"
            strokeDashoffset={276.5 - (276.5 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transform -rotate-90 origin-center transition-all duration-200"
          />
        </svg>
        <ArrowUp className="text-amber-400 z-10" size={24} />
      </button>
    </div>
  );
}
