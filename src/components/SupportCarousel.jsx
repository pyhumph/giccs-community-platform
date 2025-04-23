import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import handshake from "../assets/support.png";
import bg01 from "../assets/r.png";

export default function SupportCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Help For Food",
      category: "Food",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 75,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 2,
      title: "Give Health Support",
      category: "Health",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 65,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 3,
      title: "Children We Work With",
      category: "Health",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 85,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 4,
      title: "Help For Education",
      category: "Food",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 45,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 5,
      title: "Water For All",
      category: "Water",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 55,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 6,
      title: "Water For All",
      category: "Water",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 55,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
    {
      id: 7,
      title: "Water For All",
      category: "Water",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consete Sadipscing Elitr, Sed Diam Nonumy",
      progress: 55,
      raised: "$8500",
      goal: "$1,0000",
      image: bg01,
    },
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = cards.length - cardsPerView; // Ensure we stop at the last set of cards

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the last possible position, go back to 0
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the first position, go to last possible position
      if (prevIndex === 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleScroll = (e) => {
    if (e.deltaX > 50) {
      goToNext();
    } else if (e.deltaX < -50) {
      goToPrev();
    }
  };

  // Setup autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(autoplayRef.current);
    };
  }, [maxIndex]); // Re-initialize when maxIndex changes due to screen resize

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  const resumeAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  // Calculate card width percentage based on cards per view
  const cardWidth = 100 / cardsPerView;

  return (
    <div className="flex flex-col w-full max-w-[1300px] mx-auto px-4 sm:px-8 mt-12 mb-12 overflow-hidden">
      <div className="flex items-center mb-2">
        <img
          src={handshake}
          alt="handshake_img"
          className="w-auto h-6 sm:h-8 mr-2"
        />
        <p className="text-[#FFC107] font-[Caveat] font-bold text-xl sm:text-2xl">
          Support Communities for a Better Future
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-0">
          <span className="text-[#1E1E20]">Help & </span>
          <span className="text-[#FFC107]">Donate </span>
          <span className="text-[#1E1E20]">
            Them When <br className="hidden sm:block" /> They're In Need
          </span>
        </h1>

        <div className="flex space-x-3 self-end sm:self-auto">
          <button
            onClick={goToPrev}
            className="flex items-center justify-center bg-[#1E1E20] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          >
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </button>
          <button
            onClick={goToNext}
            className="flex items-center justify-center bg-[#FFC107] text-[#1E1E20] rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          >
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </button>
        </div>
      </div>

      <div className="relative w-full" style={{ marginRight: "-25%" }}>
        <div
          ref={carouselRef}
          className="flex overflow-hidden"
          onWheel={handleScroll}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
            }}
          >
            {cards.map((card, index) => {
              // Determine if this is the active card (first visible card)
              const isActive = index === currentIndex;
              // Determine if this is the last visible card (partially visible)
              const isPartiallyVisible =
                index === currentIndex + (cardsPerView - 1);

              return (
                <div
                  key={card.id}
                  className="flex-shrink-0 pr-4"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div
                    className={`bg-white rounded-lg shadow-lg overflow-hidden border ${isActive ? "border-[#FFC107] border-2" : "border-gray-100"
                      }`}
                  >
                    <div
                      className="relative h-32 sm:h-40 md:h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                    >
                      <div
                        className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${isActive
                            ? "bg-[#FFC107] text-[#1E1E20]"
                            : "bg-[#1E1E20] text-white"
                          } px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm`}
                      >
                        {card.category}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2">
                        {card.description}
                      </p>

                      <div className="mb-1 text-xs sm:text-sm flex justify-between">
                        <span>Donation</span>
                        <span>{card.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-2 sm:mb-4">
                        <div
                          className="bg-[#FFC107] h-1.5 sm:h-2 rounded-full"
                          style={{ width: `${card.progress}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm mb-3 sm:mb-4">
                        <span>Raised: {card.raised}</span>
                        <span>Goal: {card.goal}</span>
                      </div>

                      <div className="flex justify-start">
                        <button
                          className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-sm ${isActive
                              ? "bg-[#FFC107] text-[#1E1E20] font-medium"
                              : "bg-[#1E1E20] text-white"
                            }`}
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
