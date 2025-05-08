import React from "react";
import { Heart, Check } from "lucide-react";
import healthImg from "../../../assets/health_03.jpg";
import healthcare from "../../../assets/handshake_health.png";
import Slogan from "../../sub-comp/slogan";

const HealthIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fdf9f3]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={healthImg}
                alt="Health Support"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFC107] rounded-full p-5 shadow-lg">
                <Heart className="w-12 h-12 text-[#1E1E20]" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-4">
              <Slogan
                text="Our Health Program in Communities"
                image={healthcare}
              />
            </div>

            <h2 className="text-[#1E1E20] text-3xl md:text-4xl font-bold mb-6">
              Enabling Access to Healthcare for Underserved Communities
            </h2>

            <p className="text-gray-600 mb-8">
              At GICCS, we believe that access to healthcare is a fundamental
              right. Our health support program focuses on helping those with
              chronic illnesses who cannot afford treatment, providing resources
              and support to improve their quality of life. We work directly
              with communities to understand their unique health challenges and
              deliver targeted solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-[#1E1E20] font-semibold">
                    Chronic Illness Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Assistance for those with long-term health conditions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-[#1E1E20] font-semibold">
                    Preventative Care
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Education and resources to prevent common illnesses
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-[#1E1E20] font-semibold">
                    Community Outreach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Mobile health camps in remote areas
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-[#1E1E20] font-semibold">
                    Health Education
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Empowering communities through knowledge
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#1E1E20] text-white px-8 py-4 rounded-full font-semibold flex items-center group transition-all duration-300 hover:bg-[#FFC107] hover:text-[#1E1E20]">
              <span>Learn More About Our Approach</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthIntro;
