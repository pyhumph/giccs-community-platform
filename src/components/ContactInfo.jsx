import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
        {/* Top Row */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          {/* Location */}
          <div className="flex flex-col items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
              <FaMapMarkerAlt className="text-yellow-500 text-4xl" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Sakina, Arusha,</p>
              <p className="text-gray-600">Tanzania</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          {/* Phone */}
          <div className="flex flex-col items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <FaPhone className="text-blue-500 text-4xl" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">+255 (123) 456 789</p>
              <p className="text-gray-600">+255 (987) 654 321</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          {/* Email */}
          <div className="flex flex-col items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <FaEnvelope className="text-green-500 text-4xl" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">info@giccs.com</p>
              <p className="text-gray-600">support@giccs.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          {/* Social */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <span className="text-purple-500 text-4xl font-bold">#</span>
            </div>
            <h3 className="font-bold text-xl mb-3">Social</h3>
            <div className="flex space-x-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
