import React from "react";
import eduImg from "../../../assets/education_01.jpg";
import eduIcon from "../../../assets/education_04.png";
import CTAButton from "../../sub-comp/Button";
import LearnMoreButton from "../../sub-comp/LearnMoreBTN";
import Slogan from "../../sub-comp/slogan";

function EducationHeader() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={eduImg}
          alt="Education Program"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8 lg:px-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Slogan
              text="Education Support Program in Communities"
              image={eduIcon}
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Education Support Program
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Empowering the future generation through quality education and
            academic support.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton />
                        <LearnMoreButton />
                    </div>*/}
        </div>
      </div>

      {/* Breadcrumb */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/30 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-white/80 text-sm">
                        <a href="/" className="hover:text-[#FFC107]">
                            Home
                        </a>
                        <span className="mx-2">/</span>
                        <a href="/programs" className="hover:text-[#FFC107]">
                            Programs
                        </a>
                        <span className="mx-2">/</span>
                        <span className="text-[#FFC107]">Education</span>
                    </div>
                </div>
            </div>
            */}
    </div>
  );
}

export default EducationHeader;
