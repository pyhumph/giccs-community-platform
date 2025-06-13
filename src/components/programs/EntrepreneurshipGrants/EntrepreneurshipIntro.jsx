import React from "react";
import {
  ArrowUpRight,
  Users,
  Award,
  GraduationCap,
  CircleDollarSign,
} from "lucide-react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import entrepreneurImg from "../../../assets/entrepreneurs_training.jpg";
import businessIcon from "../../../assets/business-strategy.png";
import Slogan from "../../sub-comp/slogan";

function EntrepreneurshipIntro() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left side - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={entrepreneurImg}
              alt="Women entrepreneurs in training"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center text-white">
                <span className="bg-[#FFC107] text-[#1E1E20] text-xs font-bold py-1 px-3 rounded-full">
                  50+ Women Supported
                </span>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 md:-bottom-8 right-6 md:right-10 bg-white shadow-xl rounded-xl p-4 lg:pb-8 md:p-6 flex flex-col">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#FFC107]/20 p-2 rounded-full">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-[#FFC107]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-[#1E1E20]">
                    More Applicants
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Still accepting applications
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#FFC107]/20 p-2 rounded-full">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-[#FFC107]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-[#1E1E20]">
                    Success Stories
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Transforming lives
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <Slogan
              text="Empowering Women, Strengthening Communities"
              image={businessIcon}
            />
            <h2 className="text-sm md:text-base lg:text-2xl text-[#FFC107] font-extrabold font-[Caveat] mb-3">
              ABOUT THE PROGRAM
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1E20] mb-6">
              Empowering Women Through{" "}
              <span className="text-[#FFC107]">Business Support</span>
            </h3>

            <p className="text-gray-700 mb-6">
              Our Entrepreneurship & Business Grants program is specifically
              designed to empower women from the Shia Khoja Ithnaasheri
              Community and underserved areas. We provide financial grants,
              business training, and ongoing support to help women grow their
              existing businesses and achieve financial independence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-[#FFC107]/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <GraduationCap className="h-5 w-5 text-[#FFC107]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E20] mb-1">
                    Business Training
                  </h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive workshops and mentoring sessions on business
                    management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#FFC107]/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <CircleDollarSign className="h-5 w-5 text-[#FFC107]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E20] mb-1">
                    Financial Grants
                  </h4>
                  <p className="text-sm text-gray-600">
                    Direct financial support to help women scale their
                    businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E20] text-white p-6 rounded-xl mb-8">
              <h4 className="font-bold mb-2 text-[#FFC107]">
                Eligibility Criteria:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Must be a lady with an ongoing business
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Must come from Shia Khoja Ithnaasheri Community
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Come from underserved community
                </li>
              </ul>
            </div>

            <a
              href="https://forms.gle/CG6252eZDQdZijW7A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] self-start inline-block"
            >
              <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
                <span className="group-hover:text-white transition-colors duration-300">
                  Apply for Grants
                </span>
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transform rotate-0 group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-300 group-hover:text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EntrepreneurshipIntro;
