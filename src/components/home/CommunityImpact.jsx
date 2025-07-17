import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import handshake from "../../assets/support.png";
import bg01 from "../../assets/armando-fera-i8IeYLEZ7hE-unsplash.jpg";
import plant from "../../assets/plant.png";
import heart from "../../assets/heart-rate (2).png";
import book from "../../assets/book.png";
import girl from "../../assets/girl-power.png";
import NumberCounter from "../NumberCounter.jsx";
import hanging from "../../assets/hanging-love.png";
import bag from "../../assets/love-bag.png";
import spade from "../../assets/spade-base.png";
import CommunityButton from "../sub-comp/AnimateBTN";

// Responsive Decorative Elements
const HangingLove = () => (
  <div className="absolute left-4 sm:left-8 md:left-15 top-2 sm:top-4 md:top-0 z-0">
    <div className="animate-pulse">
      <img
        src={hanging}
        alt="hanging-love"
        className="w-12 h-20 sm:w-16 sm:h-28 md:w-20 md:h-40 lg:w-23 lg:h-50 opacity-70 sm:opacity-100"
      />
    </div>
  </div>
);

const LoveBag = () => (
  <div className="absolute right-3 sm:right-4 md:right-16 top-14 sm:top-26 md:top-10 z-0">
    <div className="animate-pulse">
      <img
        src={bag}
        alt="love-bag"
        className="w-16 h-12 sm:w-24 sm:h-18 md:w-32 md:h-24 lg:w-37 lg:h-30 opacity-70 sm:opacity-100"
      />
    </div>
  </div>
);

const Spadebase = () => (
  <div className="hidden md:block absolute right-20 lg:right-85 top-80 lg:top-110 z-0">
    <div className="animate-pulse">
      <img
        src={spade}
        alt="spade-base"
        className="w-28 h-24 lg:w-40 lg:h-35 opacity-80"
      />
    </div>
  </div>
);

const CommunityImpact = () => {
  return (
    <section className="relative bg-[#fdf9f3] text-center overflow-hidden">
      <HangingLove />
      <LoveBag />
      <Spadebase />

      {/* Top Text Block */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16">
        <div className="flex items-center mb-2 justify-center">
          <img
            src={handshake}
            alt="handshake_img"
            className="w-auto h-6 md:h-8 mr-2 flex-shrink-0"
          />
          <p className="text-[#FFC107] font-[Caveat] font-bold text-lg md:text-[1.5rem] text-center">
            Support Communities for a Better Future
          </p>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black mt-4 md:mt-6 px-2 leading-relaxed">
          Global Integrated Charitable Community Services (GICCS) is a
          registered NGO in Tanzania working to improve lives through
          sustainable programs in education, healthcare, environmental
          conservation, and economic empowerment.
        </p>

        <div className="mt-6 md:mt-8">
          <NumberCounter targetNumber={5000} duration={2500} suffix="+" />
        </div>

        <p className="text-[#5a5d78] text-sm sm:text-base md:text-lg font-semibold mt-2">
          Join The Many Who Have Benefited From Our Assistance
        </p>

        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="w-full sm:w-auto">
            <Link to={`/volunteer`}>
              <CommunityButton />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={bg01}
            alt="Background"
            className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[650px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E20] via-[#1E1E20]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex items-center mb-4 justify-start">
            <img
              src={handshake}
              alt="handshake_img"
              className="w-auto h-6 md:h-8 mr-2 flex-shrink-0"
            />
            <p className="text-[#FFC107] font-[Caveat] font-bold text-lg md:text-[1.5rem]">
              Support Communities for a Better Future
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6 lg:gap-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left max-w-4xl">
              Our Life-Changing Services You'll Love
            </h2>

            <div className="w-full sm:w-auto lg:flex-shrink-0">
              <Link to="/about#mission-vision">
                <CommunityButton text="Check Our Services" />
              </Link>
            </div>
          </div>

          {/* Improved Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-12 lg:mt-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to={`/programs/education`}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <img
                    src={book}
                    alt="book"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  />
                  <HiArrowNarrowRight className="text-[#FFC107] text-lg sm:text-xl flex-shrink-0 transform transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107] leading-tight">
                  Educational Access & Support
                </h3>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to={`/health`}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <img
                    src={heart}
                    alt="heart pulse"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  />
                  <HiArrowNarrowRight className="text-[#FFC107] text-lg sm:text-xl flex-shrink-0 transform transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107] leading-tight">
                  Health & Wellness
                </h3>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to={`/renewable-energy`}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <img
                    src={plant}
                    alt="globe with greenery"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  />
                  <HiArrowNarrowRight className="text-[#FFC107] text-lg sm:text-xl flex-shrink-0 transform transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107] leading-tight">
                  Environmental & Renewable Energy
                </h3>
              </Link>
            </div>

            {/* Card 4 */}
            {/*<div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3 gap-2">
                <img
                  src={briefcase}
                  alt="briefcase business"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                />
                <HiArrowNarrowRight className="text-[#FFC107] text-lg sm:text-xl flex-shrink-0 transform transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107] leading-tight">
                Entrepreneurship & Small Business Grants
              </h3>
            </div>
            */}

            {/* Card 5 - Women Empowerment */}
            <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <Link to={`/programs/entrepreneurship-business-grants`}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <img
                    src={girl}
                    alt="women empowerement"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  />
                  <HiArrowNarrowRight className="text-[#FFC107] text-lg sm:text-xl flex-shrink-0 transform transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107] leading-tight">
                  Women Empowerment
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
