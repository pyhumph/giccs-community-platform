import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-amber-100 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2 text-gray-700">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600">
              Regular Inspections And Feedback Mechanisms
            </p>
            <div className="text-yellow-500 text-5xl mt-4">❤</div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex">
              <input
                type="email"
                className="w-full m-2 px-4 py-4 bg-white text-gray-600 text-lg border border-gray-400 rounded-full focus:outline-none"
                placeholder="Enter Email"
              />
              <button className="bg-yellow-500 m-2 text-white text-lg px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
