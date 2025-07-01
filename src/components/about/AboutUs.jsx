import React from "react";
import { Heart, Info, Phone, ArrowRight, Gift } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="py-16 px-4 max-w-[1700px] mx-auto bg-white">
      {/* Hero Section */}
      <section className="px-4 py-12 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center text-green-600">
              {/* <p className="font-medium">Start Donating For People</p> */}
            </div>

            <h1 className="text-4xl mt-1 md:text-5xl font-bold text-gray-800">
              Helping Each Other Can Make The{" "}
              <span className="text-yellow-400">World</span> Better
            </h1>

            <p className="text-gray-600">
              Volunteering Offers Opportunities To Develop New Skills And Gain
              Valuable Experience. This Can Include Leadership, Communication,
              Project Management, And Teamwork Skills.
            </p>

            {/*<div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center p-4 rounded-lg border border-gray-200">
                <div className="p-2 bg-yellow-50 rounded-full mr-3 animate-bounce">
                  <Heart className="w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold">Start Helping Them</h3>
                  <p className="text-sm text-gray-500">
                    Raising Awareness About The Charity's Mission And Cause
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-lg border border-gray-200">
                <div className="p-2 bg-yellow-50 rounded-full mr-3 animate-bounce">
                  <Gift className="w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold">Make Donations</h3>
                  <p className="text-sm text-gray-500">
                    Raising Awareness About The Charity's Mission And Cause
                  </p>
                </div>
              </div>
            </div>
            */}

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Helped Fund 3,265 Project Powerful Corporate Poor
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We Give Child A Gift Of A Education
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We Help Companies Develop Powerful Corporate Social
                  Responsibility
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/*<button className="px-6 py-3 bg-yellow-400 text-white rounded-full font-medium hover:bg-yellow-500 flex items-center justify-center">
                More About Us
              </button>
              */}

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+255 784 266 633</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="md:w-1/2 h-full">
            <div className="grid gap-2 mt-16">
              {/* Row 2: 3 images */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <img
                    src="https://st.depositphotos.com/1003580/2153/i/450/depositphotos_21531951-stock-photo-hungry-children-in-refugee-camp.jpg"
                    alt="Children smiling"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5a2ba8479f07f51bfa2d71f6/1518285598484-5GDDE7HQS2WZGBYMBTQX/AOO_WEBSITE_IMAGES-04593.jpg"
                    alt="Charity support"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/636215476/photo/african-little-girls-are-learning-english-language-orphanage-in-kenya.jpg?s=612x612&w=0&k=20&c=Rt_LOqh_y2NPgUNtN47PBIOK_dC2Na_2DHRlsa8vqck="
                    alt="Education program"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Row 3: 4 images */}
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <img
                    src="https://justglobetrotting.com/wp-content/uploads/2016/06/langbos-fundraiser-1080x675.jpg"
                    alt="Food donation"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://pmedia.launchgood.com/144820/provide_food__water_to_orphans_in_africa_5DF563F7-B817-4524-A9B6-60D5A2427C16-700x525.jpeg"
                    alt="Health services"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://iis.ac.tz/wp-content/uploads/2021/11/Donations-e1571400713666.jpg"
                    alt="Clean water"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://rippleafrica.org/wp-content/uploads/2023/10/A-large-primary-school-class-in-Malawi.jpg"
                    alt="Shelter building"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Row 1: 1 image (centered) */}
              <div className="mx-auto w-full">
                <img
                  src="https://olbios.org/wp-content/uploads/2020/09/olbios-6-scaled.jpg"
                  alt="Children eating"
                  className="w-full h-42 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
