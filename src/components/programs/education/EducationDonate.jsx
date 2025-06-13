import React from "react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import Button from "../../sub-comp/Button";
import eduImg from "../../../assets/education-001.jpg";
import eduIcon from "../../../assets/education_04.png";
import EducationalPartner from "./EducationalPartner";
import Slogan from "../../sub-comp/slogan";
import LearnMoreButton from "../../sub-comp/LearnMoreBTN";
import { Link } from "react-router-dom";
import CTAButton from "../../sub-comp/Button";

function EducationDonate() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="bg-gradient-to-r from-[#1E1E20] to-[#2a2a2c] rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Content */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 text-white">
              <Slogan text="Support Our Cause" image={eduIcon} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Help Us Educate More Students
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Your donation can change a student's life. By supporting our
                education program, you're investing in the future of our
                community and helping bright minds achieve their potential.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-[#1E1E20]">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Sponsor a Student
                    </h3>
                    <p className="text-gray-300">
                      Cover the full educational expenses for a student
                      throughout their academic journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-[#1E1E20]">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Support a Scholarship
                    </h3>
                    <p className="text-gray-300">
                      Contribute to our scholarship fund to help multiple
                      students achieve their educational goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-[#1E1E20]">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Donate Learning Materials
                    </h3>
                    <p className="text-gray-300">
                      Provide books, computers, and other educational resources
                      to help students succeed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to={`/donation/application`}>
                  <CTAButton />
                </Link>
                <Link to={`/contact`}>
                  <LearnMoreButton text="Contact Us" />
                </Link>
                {/*<button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Contact Us..
                                </button>
                                */}
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-2/5 flex items-center justify-center bg-[#FFC107]/10">
              <div className="relative w-full h-full min-h-[300px]">
                <img
                  src={eduImg}
                  alt="Support Education"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-center p-6 bg-[#1E1E20]/80 rounded-lg max-w-xs">
                    <div className="text-[#FFC107] text-5xl font-bold mb-2">
                      $50
                    </div>
                    <p className="text-white text-lg font-medium">
                      can provide educational materials for a student
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 text-center">
          <EducationalPartner />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EducationDonate;
