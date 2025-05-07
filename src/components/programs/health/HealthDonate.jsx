import React from "react";
import { Heart, DollarSign, Gift, Users } from "lucide-react";
import healthcare from "../../../assets/handshake_health.png";
import Slogan from "../../sub-comp/slogan";

const HealthDonate = () => {
  const donationOptions = [
    {
      amount: 25,
      title: "Basic Support",
      description:
        "Provides a month of medication for one person with a chronic condition.",
    },
    {
      amount: 50,
      title: "Family Support",
      description:
        "Supports a family with health education and basic medical supplies.",
    },
    {
      amount: 100,
      title: "Community Impact",
      description:
        "Funds a community health screening event for early detection of conditions.",
    },
    {
      amount: 250,
      title: "Sustainable Support",
      description:
        "Enables a community health worker to support 50+ patients for a month.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1E1E20] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="flex items-center mb-4">
              <Slogan
                text="Support Our Work in Communities"
                image={healthcare}
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Donation Makes A Difference
            </h2>

            <p className="text-white/80 mb-6">
              When you donate to GICCS health program, you're directly
              supporting individuals who need medical assistance but cannot
              afford it. Every contribution helps us extend our reach and
              provide essential health support to more communities across
              Tanzania.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Heart className="text-[#FFC107] w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-lg">3,500+</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Lives improved through medication support
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Gift className="text-[#FFC107] w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-lg">94%</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Of donations go directly to programs
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <DollarSign className="text-[#FFC107] w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-lg">$25</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Can provide a month of medication
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Users className="text-[#FFC107] w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-lg">78</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Communities supported nationwide
                </p>
              </div>
            </div>

            <button className="bg-[#FFC107] hover:bg-[#e0a800] text-[#1E1E20] px-8 py-4 rounded-md font-semibold inline-flex items-center transition-all">
              Make a Donation Today
            </button>
          </div>

          {/* Right Column - Donation Options */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-[#1E1E20] text-2xl font-bold mb-6 text-center">
              Choose Your Impact
            </h3>

            <div className="space-y-4">
              {donationOptions.map((option, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-[#FFC107] transition-colors"
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="bg-[#FFC107]/20 rounded-full p-3">
                        <DollarSign className="text-[#FFC107] w-6 h-6" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#1E1E20]">
                          ${option.amount}
                        </h4>
                        <span className="text-sm font-medium text-[#FFC107]">
                          {option.title}
                        </span>
                      </div>

                      <p className="text-[#1E1E20]/70 text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-[#FFC107] transition-colors">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="bg-[#FFC107]/20 rounded-full p-3">
                      <Gift className="text-[#FFC107] w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-bold text-[#1E1E20]">Custom Amount</h4>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="mt-2 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#FFC107] hover:bg-[#e0a800] text-[#1E1E20] px-8 py-4 rounded-md font-semibold transition-all">
                Donate Now
              </button>
            </div>

            <div className="mt-6 text-center text-[#1E1E20]/60 text-sm">
              <p>Your donation is tax-deductible.</p>
              <p>GICCS is a registered non-profit organization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthDonate;
