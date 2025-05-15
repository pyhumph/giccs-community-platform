import React from "react";
import {
  BookOpen,
  TrendingUp,
  Users,
  CircleDollarSign,
  Briefcase,
  BarChart,
} from "lucide-react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import CTAButton from "../../sub-comp/Button";
import LearnMoreButton from "../../sub-comp/LearnMoreBTN";

function EntrepreneurshipServices() {
  const services = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#FFC107]" />,
      title: "Business Education",
      description:
        "Comprehensive training on business fundamentals, financial management, and growth strategies.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FFC107]" />,
      title: "Marketing Support",
      description:
        "Learn effective marketing strategies to reach more customers and grow your business presence.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#FFC107]" />,
      title: "Mentorship Programs",
      description:
        "One-on-one guidance from experienced entrepreneurs and business professionals.",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-[#FFC107]" />,
      title: "Financial Grants",
      description:
        "Direct financial assistance to help qualified women entrepreneurs scale their businesses.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#FFC107]" />,
      title: "Business Resources",
      description:
        "Access to tools, templates, and resources to streamline business operations.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#FFC107]" />,
      title: "Growth Planning",
      description:
        "Strategic planning assistance to help businesses reach the next level of success.",
    },
  ];

  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm md:text-base text-[#FFC107] font-bold mb-3">
            WHAT WE OFFER
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1E20] mb-4">
            Comprehensive Support for{" "}
            <span className="text-[#FFC107]">Women Entrepreneurs</span>
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our program provides holistic support to ensure women entrepreneurs
            have everything they need to succeed in their business ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-[#FFC107] group"
            >
              <div className="bg-[#FFC107]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFC107]/20 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#1E1E20] mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-12 md:mt-16 bg-[#1E1E20] text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Ready to take your business to the next level?
              </h4>
              <p className="text-gray-300 mb-6">
                We're looking for motivated women entrepreneurs who are
                passionate about growing their businesses and making a positive
                impact in their communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton text="Apply Now" />
                <LearnMoreButton text="Contact Us" />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2 relative">
              <img
                src="/api/placeholder/600/500"
                alt="Women entrepreneurs"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E20] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default EntrepreneurshipServices;
