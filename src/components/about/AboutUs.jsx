import React from "react";
import { Heart, Info, Phone, ArrowRight, Gift } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-12 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center text-green-600">
              {/* <p className="font-medium">Start Donating For People</p> */}
            </div>

            <h1 className="text-4xl mt-16 md:text-5xl font-bold text-gray-800">
              Helping Each Other Can Make{" "}
              <span className="text-yellow-400">World</span> Better
            </h1>

            <p className="text-gray-600">
              Volunteering Offers Opportunities To Develop New Skills And Gain
              Valuable Experience. This Can Include Leadership, Communication,
              Project Management, And Teamwork Skills.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center p-4 rounded-lg border border-gray-200">
                <div className="p-2 bg-yellow-50 rounded-full mr-3">
                  <Heart className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Start Helping Them</h3>
                  <p className="text-sm text-gray-500">
                    Raising Awareness About The Charity's Mission And Cause
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-lg border border-gray-200">
                <div className="p-2 bg-yellow-50 rounded-full mr-3">
                  <Gift className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Make Donations</h3>
                  <p className="text-sm text-gray-500">
                    Raising Awareness About The Charity's Mission And Cause
                  </p>
                </div>
              </div>
            </div>

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
              <button className="px-6 py-3 bg-yellow-400 text-white rounded-full font-medium hover:bg-yellow-500 flex items-center justify-center">
                More About Us
              </button>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+234 (456) 896 22</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Children eating"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1 relative">
                <div className="h-48 bg-teal-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-24 bg-green-100 flex flex-col items-center justify-center rounded-r-full">
                  <p className="text-xs font-bold text-green-800 transform -rotate-90 whitespace-nowrap">
                    we give donations to poor people
                  </p>
                </div>
              </div>

              <div className="col-span-1">
                <img
                  src="https://st.depositphotos.com/1003580/2153/i/450/depositphotos_21531951-stock-photo-hungry-children-in-refugee-camp.jpg"
                  alt="Children smiling"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
