import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Fill Up The Form</h2>
      <p className="text-gray-600 mb-4">
        Feel Free To Contact With Us, We'll Get Back To You ASAP!
      </p>
      <p className="text-red-500 text-sm mb-6">* Fields Are Marked</p>

      <form>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Enter Name"
            />
            <span className="absolute right-4 top-3 text-gray-400">👤</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Enter Email"
            />
            <span className="absolute right-4 top-3 text-gray-400">✉️</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Phone Number"
            />
            <span className="absolute right-4 top-3 text-gray-400">📱</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <textarea
              className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-yellow-500"
              placeholder="Your Message..."
            ></textarea>
            <span className="absolute right-4 top-3 text-gray-400">💬</span>
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
