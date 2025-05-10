import React from "react";
import { ArrowUpRight } from "lucide-react";

function EntrepreneurshipDonate() {
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E1E20] to-[#2A2A2E] shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side: Text content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-sm md:text-base text-[#FFC107] font-bold mb-3 uppercase">
                Support Women Entrepreneurs
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
                Help Us Empower More Women Through Business
              </h3>
              <p className="text-gray-300 mb-8">
                Your donation can help provide business grants, training, and
                mentorship to women entrepreneurs from the Shia Khoja
                Ithnaasheri community. Together, we can create opportunities for
                economic independence and community transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FFC107] text-[#1E1E20] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#FFD54F] transition-colors group">
                  <span>Donate Now</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                </button>
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                  Become a Partner
                </button>
              </div>
            </div>

            {/* Right side: Donation goals */}
            <div className="bg-white p-8 md:p-12 lg:p-16">
              <h4 className="text-xl md:text-2xl font-bold text-[#1E1E20] mb-6">
                Our Donation Goals
              </h4>

              {/* Progress bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>Business Startup Grants</span>
                    <span>$15,000 / $25,000</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFC107] rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>Business Training Programs</span>
                    <span>$10,000 / $20,000</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFC107] rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>Mentorship Network</span>
                    <span>$8,000 / $15,000</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFC107] rounded-full"
                      style={{ width: "53%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Donation impact */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-[#1E1E20] font-bold text-xl md:text-2xl lg:text-3xl">
                    $250
                  </p>
                  <p className="text-gray-600 text-sm">
                    Business Skills Workshop for 1 Woman
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-[#1E1E20] font-bold text-xl md:text-2xl lg:text-3xl">
                    $1,000
                  </p>
                  <p className="text-gray-600 text-sm">
                    Micro Business Startup Grant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurshipDonate;
