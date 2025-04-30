import { HiArrowNarrowRight } from "react-icons/hi";
import handshake from "../assets/support.png";
import bg01 from "../assets/armando-fera-i8IeYLEZ7hE-unsplash.jpg";
import briefcase from "../assets/briefcase.png";
import plant from "../assets/plant.png";
import heart from "../assets/heart-rate (2).png";
import book from "../assets/book.png";
import girl from "../assets/girl-power.png";
import NumberCounter from "../components/NumberCounter"; // Import the NumberCounter component
import hanging from "../assets/hanging-love.png";
import bag from "../assets/love-bag.png";
import spade from "../assets/spade-base.png";

// Parachute Animation Component
const HangingLove = () => (
  <div className="absolute left-15 top-0">
    <div className="animate-pulse">
      <img src={hanging} alt="hanging-love" className="w-23 h-50" />
    </div>
  </div>
);

const LoveBag = () => (
  <div className="absolute right-10 top-10">
    <div className="animate-pulse">
      <img src={bag} alt="love-bag" className="w-37 h-30" />
    </div>
  </div>
);

const Spadebase = () => (
  <div className="absolute right-85 top-110">
    <div className="animate-pulse">
      <img src={spade} alt="love-bag" className="w-40 h-35" />
    </div>
  </div>
);

const CommunityImpact = () => {
  return (
    <section className="relative bg-[#fdf9f3] text-center py-12 md:py-16 lg:py-24">
      <HangingLove />
      <LoveBag />
      <Spadebase />
      {/* Top Text Block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center mb-2 justify-center">
          <img
            src={handshake}
            alt="handshake_img"
            className="w-auto h-6 md:h-8 mr-2"
          />
          <p className="text-[#FFC107] font-[Caveat] font-bold text-lg md:text-[1.5rem]">
            Support Communities for a Better Future
          </p>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mt-4 md:mt-6 px-2">
          Global Integrated Charitable Community Services (GICCS) Is A
          Registered NGO In Tanzania Working To Improve Lives Through
          Sustainable Programs In Education, Healthcare, Environmental
          Conservation, And Economic Empowerment.
        </p>

        {/* Replaced static div with animated NumberCounter component */}
        <NumberCounter targetNumber={154489} duration={2500} suffix="+" />

        <p className="text-[#5a5d78] text-base md:text-lg font-semibold mt-2">
          Join The Many Who Have Benefited From Our Assistance
        </p>
        <div className="mt-6">
          <CommunityButton />
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mt-16 md:mt-20 lg:mt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={bg01}
            alt="Background"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
          />

          <div className="absolute inset-0 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-r from-[#1E1E20] to-transparent"></div>
          <div className="absolute inset-0 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="flex items-center mb-2 justify-start mt-4 md:mt-8">
            <img
              src={handshake}
              alt="handshake_img"
              className="w-auto h-6 md:h-8 mr-2"
            />
            <p className="text-[#FFC107] font-[Caveat] font-bold text-lg md:text-[1.5rem]">
              Support Communities for a Better Future
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10 gap-4">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
              Our Life-Changing Services <br className="hidden sm:block" />{" "}
              You'll Love
            </h2>

            <div>
              <CommunityButton text="Check Our Services" />
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-24">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <img src={book} alt="book" className="w-auto h-12 md:h-16" />
                <HiArrowNarrowRight className="text-[#FFC107] text-xl transform transition-all duration-300 group-hover:-rotate-45 relative z-10" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107]">
                Educational Access & Support
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <img
                  src={heart}
                  alt="heart pulse"
                  className="w-auto h-12 md:h-16"
                />
                <HiArrowNarrowRight className="text-[#FFC107] text-xl transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107]">
                Health & Wellness
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <img
                  src={plant}
                  alt="globe with greenery"
                  className="w-auto h-12 md:h-16"
                />
                <HiArrowNarrowRight className="text-[#FFC107] text-xl transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107]">
                Environmental & Renewable Energy
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <img
                  src={briefcase}
                  alt="briefcase business"
                  className="w-auto h-12 md:h-16"
                />
                <HiArrowNarrowRight className="text-[#FFC107] text-xl transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107]">
                Entrepreneurship & Small Business Grants
              </h3>
            </div>

            {/* Card 5 - Women Empowerment */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <img
                  src={girl}
                  alt="women empowerement"
                  className="w-auto h-12 md:h-16"
                />
                <HiArrowNarrowRight className="text-[#FFC107] text-xl transform transition-transform duration-300 group-hover:-rotate-45" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-left transition-colors duration-300 group-hover:text-[#FFC107]">
                Women Empowerment
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
