import React from "react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import eduImg from "../../../assets/education_03.jpg";
import eduIcon from "../../../assets/education_04.png";
import test03 from "../../../assets/testimonial_03.png";
import Slogan from "../../sub-comp/slogan";

function EducationImpact() {
  const impactStats = [
    {
      id: 1,
      count: "300+",
      title: "Students Supported",
      description:
        "Total students who have received support through our education program",
    },
    {
      id: 2,
      count: "100+",
      title: "Current Students",
      description:
        "Students currently continuing their education with our support",
    },
    {
      id: 3,
      count: "85%",
      title: "Graduation Rate",
      description:
        "Percentage of supported students who successfully complete their education",
    },
    {
      id: 4,
      count: "10+",
      title: "Partner Institutions",
      description:
        "Educational institutions we collaborate with for student placement",
    },
  ];

  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Slogan
              text="Our Education Support Program Impact"
              image={eduIcon}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E20]">
            Making a Difference Through Education
          </h2>
          <p className="text-gray-700 text-lg">
            Over the years, our education support program has transformed the
            lives of hundreds of students. Here's how we're creating lasting
            impact in our community.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-[#FFC107]"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-2">
                {stat.count}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1E1E20]">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Story */}
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={eduImg}
                alt="Education Impact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1E1E20]">
                Success Stories
              </h3>
              <p className="text-gray-700 mb-6">
                Our education program has helped countless students achieve
                their dreams. From humble beginnings to professional success,
                our alumni are making significant contributions to their
                communities and beyond.
              </p>

              {/* Quote */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6 relative">
                <div className="absolute -top-3 -left-3 text-5xl text-[#FFC107]/30">
                  "
                </div>
                <p className="text-gray-700 italic mb-4">
                  The support I received from GICCS changed my life. I was able
                  to complete my education and now I work as a software
                  engineer, helping others in my community.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img
                      src={test03}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1E1E20]">Mohammed H.</p>
                    <p className="text-sm text-gray-600">
                      Computer Science Graduate
                    </p>
                  </div>
                </div>
              </div>

              <button className="hover:scale-105 bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 py-3 md:py-3 lg:py-4 xl:py-[22px] rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] self-start">
                <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
                  <span className="group-hover:text-white transition-colors duration-300">
                    Read More Stories
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-rotate-45 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EducationImpact;
