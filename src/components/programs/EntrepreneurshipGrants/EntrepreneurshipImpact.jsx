import React from "react";
import { TrendingUp, Users, CircleDollarSign, Briefcase } from "lucide-react";
import entrepreneurshipTraining from "../../../assets/entrepreneur-training_01.jpg";
import womanImg from "../../../assets/entrepreneur-woman-05.jpg";
import womanBusiness from "../../../assets/entrepreneurship-woman_02.jpg";
import successWoman from "../../../assets/entrepreneur-woman-03.jpg";
import workshop from "../../../assets/woman-entrepreneur.jpg";
import fatma from "../../../assets/woman-modified.png";
import businessIcon from "../../../assets/business-strategy.png";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import NumberCounter from "../../NumberCounter";
import Slogan from "../../sub-comp/slogan";

function EntrepreneurshipImpact() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#FFC107]" />,
      number: 50,
      text: "Women Supported",
      suffix: "+",
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-[#FFC107]" />,
      number: 25000,
      text: "In Grants Awarded",
      prefix: "$",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#FFC107]" />,
      number: 30,
      text: "Businesses Expanded",
      suffix: "+",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FFC107]" />,
      number: 80,
      text: "Income Increase",
      suffix: "%",
    },
  ];

  return (
    <SectionWrapper>
      <div className="container  mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <Slogan
              text="Empowering Women, Strengthening Communities"
              image={businessIcon}
            />
            <h2 className="text-sm md:text-base lg:text-2xl text-[#FFC107] font-extrabold font-[Caveat] mb-3">
              OUR IMPACT
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1E20] mb-6">
              Transforming Lives Through{" "}
              <span className="text-[#FFC107]">Entrepreneurship</span>
            </h3>

            <p className="text-gray-700 mb-8">
              Our Entrepreneurship & Business Grants program has made a
              significant impact in the lives of women from the Shia Khoja
              Ithnaasheri Community and underserved areas. Through financial
              support, training, and mentorship, we've helped women grow their
              businesses, increase their incomes, and achieve greater financial
              independence.
            </p>

            {/* Stats in grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center"
                >
                  <div className="bg-[#FFC107]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E1E20] flex items-center">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <NumberCounter
                      targetNumber={stat.number}
                      duration={2000}
                      suffix={stat.suffix || ""}
                    />
                  </h4>

                  <p className="text-gray-600 text-sm md:text-base">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden h-40 md:h-48 lg:h-56">
                <img
                  src={womanBusiness}
                  alt="Woman entrepreneur with her business"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-52 md:h-60 lg:h-72">
                <img
                  src={entrepreneurshipTraining}
                  alt="Women in business training session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-xl overflow-hidden h-52 md:h-60 lg:h-72">
                <img
                  src={successWoman}
                  alt="Successful woman entrepreneur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-40 md:h-48 lg:h-56">
                <img
                  src={workshop}
                  alt="Business workshop for women"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success story highlight */}
        <div className="mt-16 md:mt-20 bg-gray-50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10 order-2 lg:order-1">
              <div className="inline-block bg-[#FFC107]/20 text-[#1E1E20] font-bold py-1 px-4 rounded-full text-xs mb-4">
                Success Story
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#1E1E20] mb-4">
                "This program transformed my small tailoring business into a
                thriving enterprise"
              </h4>
              <p className="text-gray-700 mb-6">
                "Before receiving support from GICCS, I was struggling to expand
                my small tailoring business. The grant helped me purchase new
                equipment, while the business training improved my financial
                management skills. Now, I employ three other women and my income
                has doubled."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
                  <img
                    src={fatma}
                    alt="Testimonial profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-[#1E1E20]">Fatima H.</h5>
                  <p className="text-sm text-gray-600">
                    Tailoring Business Owner
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-2">
              <img
                src={womanImg}
                alt="Woman entrepreneur in her shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EntrepreneurshipImpact;
