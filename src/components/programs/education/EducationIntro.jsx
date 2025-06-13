import React from "react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import eduImg from "../../../assets/education_02.jpg";
import eduIcon from "../../../assets/education_04.png";
import Slogan from "../../sub-comp/slogan";
import CTAButton from "../../sub-comp/Button";

function EducationIntro() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image column */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img
                src={eduImg}
                alt="Education Program"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFC107] p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-center text-[#1E1E20]">
                  <div className="text-4xl font-bold">300+</div>
                  <div className="text-xl font-medium">Students Supported</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex mb-4">
              <Slogan
                text="Education Support Program in Communities"
                image={eduIcon}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1E1E20]">
              Investing in Education for Brighter Futures
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              At GICCS, we believe that education is the cornerstone of
              community development and individual empowerment. Our Education
              Support Program provides financial assistance, resources, and
              mentorship to deserving students from the Shia Khoja Ithnaasheri
              Community.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              With a focus on underprivileged communities, we've already
              supported over 300 students in their educational journey, with
              approximately 100 currently continuing their studies under our
              program.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFC107]/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FFC107]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E20]">
                    Quality Education
                  </h4>
                  <p className="text-gray-600">
                    Access to top educational institutions
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFC107]/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FFC107]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E20]">Mentorship</h4>
                  <p className="text-gray-600">
                    Guidance from experienced professionals
                  </p>
                </div>
              </div>
            </div>

            {/*<CTAButton text="Support Our Course" />*/}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EducationIntro;
