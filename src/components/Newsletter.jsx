import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-400">
              Regular Inspections And Feedback Mechanisms
            </p>
            <div className="text-yellow-500 text-4xl mt-4">❤</div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex">
              <input
                type="email"
                className="w-full px-4 py-3 rounded-l-lg focus:outline-none"
                placeholder="Enter Email"
              />
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
